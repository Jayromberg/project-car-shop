import request from 'supertest';
import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import app from '../../../src/app';
import { carInput, carOutput } from '../../Utils/mock.car';

describe('Endpoint de registro de carro', function () {
  it('Requisição feita com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const httpResponse = await request(app).post('/cars').send(carInput);
    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(carOutput);
    sinon.restore();
  });
 
  // afterEach(function () {
  //   sinon.restore();
  // });  
});