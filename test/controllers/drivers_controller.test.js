const assert = require('assert');
const request = require('supertest');
//
const app = require('../app');

describe('Drivers controller', ()=>{
  it('Post ot /api/drivers creates a new driver', (done)=>{
    request(app).post('/api/drivers')
    .send({email:'test@test.com'})
    .end((err, res)=>{
        assert(res.body.hi === 'there');
        done();
    });
  });
});