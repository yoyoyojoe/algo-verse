const request = require('supertest');
const path = require('path');

const app = require('../server/server.js')


// const server = 'http://localhost:3000/';


describe('Route integration', () => {

  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(app)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
        .end((err, res) => {
if (err) throw err;
        })
      })
    })
  })
})