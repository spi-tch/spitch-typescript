const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const config = ts.readConfigFile('tsconfig.build.json', ts.sys.readFile);
const options = ts.parseJsonConfigFileContent(config.config, ts.sys, process.cwd());
options.options.module = ts.ModuleKind.ESNext;
const program = ts.createProgram(options.fileNames, options.options);

// Node's ESM loader requires exact filenames, including directory index modules.
const esmSpecifiers = (context) => (source) => {
  function visit(node, parent, grandparent) {
    const moduleName =
      parent?.moduleSpecifier === node ||
      (parent && ts.isCallExpression(parent) && parent.expression.kind === ts.SyntaxKind.ImportKeyword) ||
      (grandparent && ts.isImportTypeNode(grandparent) && parent === grandparent.argument);
    if (
      moduleName &&
      ts.isStringLiteral(node) &&
      node.text.startsWith('.') &&
      !node.text.includes('node_modules/')
    ) {
      const target = path.resolve(path.dirname(source.fileName), node.text);
      for (const suffix of ['', '/index']) {
        if (fs.existsSync(target + suffix + '.ts')) {
          return ts.factory.createStringLiteral(node.text + suffix + '.mjs');
        }
      }
    }
    return ts.visitEachChild(node, (child) => visit(child, node, parent), context);
  }
  return ts.visitNode(source, visit);
};

function esmFilename(name) {
  return name.replace(/\.js(?=\.map$|$)/, '.mjs').replace(/\.d\.ts(?=\.map$|$)/, '.d.mts');
}

const result = program.emit(
  undefined,
  (filename, contents) => {
    if (filename.endsWith('.map')) {
      const map = JSON.parse(contents);
      map.file = esmFilename(map.file);
      contents = JSON.stringify(map);
    } else {
      contents = contents.replace(
        /(\/\/# sourceMappingURL=)([^\n]+)/,
        (_, prefix, name) => prefix + esmFilename(name),
      );
    }
    fs.writeFileSync(esmFilename(filename), contents);
  },
  undefined,
  false,
  { before: [esmSpecifiers], afterDeclarations: [esmSpecifiers] },
);
const diagnostics = [...ts.getPreEmitDiagnostics(program), ...result.diagnostics];
if (diagnostics.length) {
  console.error(ts.formatDiagnostics(diagnostics, ts.createCompilerHost(options.options)));
  process.exitCode = 1;
}
