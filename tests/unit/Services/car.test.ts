import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarRepository from '../../../src/Repositories/CarRepository';
import CarService from '../../../src/Services/CarService';

import { carInput, carOutput } from '../../Utils/mock.car';
import HttpException from '../../../src/Utils/HttpException';

describe('SERVICE - Deveria trafegar os dados do banco', function () {
  it('Deveria registrar um carro com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const carRepository = new CarRepository();
    const service = new CarService(carRepository);
    const result = await service.register(carInput);
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria buscar todos os carros com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);

    const carRepository = new CarRepository();
    const service = new CarService(carRepository);
    const result = await service.getAll();
    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deveria buscar um dos carros com SUCESSO', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const carRepository = new CarRepository();
    const service = new CarService(carRepository);
    const result = await service.getById('6378d1c99b090153e49a4895');
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria atualizar um dos carros com SUCESSO', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const carRepository = new CarRepository();
    const service = new CarService(carRepository);
    const result = await service.update('6378d1c99b090153e49a4895', carInput);
    expect(result).to.be.deep.equal(carOutput);
  });
 
  it('Deveria retornar erro caso o carro não for encontrado', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const carRepository = new CarRepository();
    const service = new CarService(carRepository);
    
    try {
      await service.getById('6378d1c99b090153e49a4895');
    } catch (error) {
      const err = error as HttpException;
      expect(err.message).to.be.equal('Car not found');
      expect(err.status).to.be.equal(404);
    }
  });

  afterEach(function () {
    sinon.restore();
  });  
});