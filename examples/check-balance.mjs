// Set SPITCH_API_KEY and run with Node.js 22 or later before queuing a batch.
import Spitch from 'spitch';

const client = new Spitch();
try {
  const balance = await client.balance.get();
  console.log(`${balance.amount} ${balance.currency}`);
  // Format the decimal string directly to avoid floating-point rounding at the threshold.
  const wholeDollars = new Intl.NumberFormat('en-US', {
    useGrouping: false,
    maximumFractionDigits: 0,
    roundingMode: 'floor',
  }).format(balance.amount);
  if (BigInt(wholeDollars) < 5n) {
    console.log('Below the 5 USD minimum. Hold the batch.');
    process.exitCode = 1;
  } else {
    console.log('Credit check passed. The batch can be queued.');
  }
} catch (error) {
  console.error(`Balance lookup failed (${error.name}). Hold the batch.`);
  process.exitCode = 2;
}
