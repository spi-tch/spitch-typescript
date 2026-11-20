import Spitch from 'spitch';

test('balance.get preserves the exact USD amount', async () => {
  const client = new Spitch({
    apiKey: 'My API Key',
    baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  });
  const balance: Spitch.BalanceResponse = await client.balance.get();
  expect(balance).toEqual({ amount: '12.34567890123456789', currency: 'USD' });
});
