const test = require('tape-catch');
const app = require('../src/app');

test('Server should start', t => {
  const server = app.listen(() => {
    t.pass('Server starts without error');
    server.close(t.end);
  });
});
