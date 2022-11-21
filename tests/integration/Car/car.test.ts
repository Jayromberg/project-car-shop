import request from 'supertest';
import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import app from '../../../src/app';
import { carInput, carOutput, genericError } from '../../Utils/mock.car';

const URL_CAR_ID = '/cars/6378d1c99b090153e49a4895';
const ERROR_MESSAGE = 'Internal Server Error';

describe('Endpoint /cars', function () {
  it('Requisição de registro de carro feita com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const httpResponse = await request(app).post('/cars').send(carInput);
    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(carOutput);
  });

  it('Requisição de busca de todos os carros feita com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);
    const httpResponse = await request(app).get('/cars');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal([carOutput]);
  });

  it('Requisição de busca de um dos carros feita com SUCESSO', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);
    const httpResponse = await request(app).get(URL_CAR_ID);
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(carOutput);
  });

  it('Requisição de atualização de um dos carros feita com SUCESSO', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
    const httpResponse = await request(app).put(URL_CAR_ID).send(carInput);
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(carOutput);
  });

  it('Requisição de registro de carro invalida', async function () {
    sinon.stub(Model, 'create').throws(genericError);
    const httpResponse = await request(app).post('/cars').send(carInput);
    expect(httpResponse.status).to.be.equal(500);
    expect(httpResponse.body).to.be.deep.equal({ message: ERROR_MESSAGE });
  });

  it('Requisição de busca de todos os carros invalida', async function () {
    sinon.stub(Model, 'find').throws(genericError);
    const httpResponse = await request(app).get('/cars');
    expect(httpResponse.status).to.be.equal(500);
    expect(httpResponse.body).to.be.deep.equal({ message: ERROR_MESSAGE });
  });

  it('Requisição de busca de um dos carros invalida', async function () {
    sinon.stub(Model, 'findById').throws(genericError);
    const httpResponse = await request(app).get(URL_CAR_ID);
    expect(httpResponse.status).to.be.equal(500);
    expect(httpResponse.body).to.be.deep.equal({ message: ERROR_MESSAGE });
  });

  it('Requisição de atualização de um dos carros invalida', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').throws(genericError);
    const httpResponse = await request(app).put(URL_CAR_ID).send(carInput);
    expect(httpResponse.status).to.be.equal(500);
    expect(httpResponse.body).to.be.deep.equal({ message: ERROR_MESSAGE });
  });

  afterEach(function () {
    sinon.restore();
  });  
});