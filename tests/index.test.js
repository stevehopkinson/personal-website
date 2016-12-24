const test = require('tape-catch');
const request = require('supertest');
const app = require('../src/app');

test('Server should start', t => {
  const server = app.listen(() => {
    t.pass('Server starts without error');
    server.close(t.end);
  });
});

test('App should respond to / route with a 200 status code', t => {
  request(app)
    .get('/')
    .expect(200)
    .end(err => {
      if (err) {
        t.error(err);
      } else {
        t.pass('App responded to request for / with status code 200');
      }
      t.end();
    });
});
