import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleRepository from '../../../src/Repositories/MotorcycleRepository';
import MotorcycleService from '../../../src/Services/MotorcycleService';

import { motorcycleInput, motorcycleOutput } from '../../Utils/mock.motorcycle';
import HttpException from '../../../src/Utils/HttpException';

describe('SERVICE - Deveria trafegar os dados das motos', function () {
  it('Deveria registrar uma moto com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const repository = new MotorcycleRepository();
    const service = new MotorcycleService(repository);
    const result = await service.register(motorcycleInput);
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deveria buscar todas as motos com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);

    const repository = new MotorcycleRepository();
    const service = new MotorcycleService(repository);
    const result = await service.getAll();
    expect(result).to.be.deep.equal([motorcycleOutput]);
  });

  it('Deveria buscar uma das motos pelo id com SUCESSO', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const repository = new MotorcycleRepository();
    const service = new MotorcycleService(repository);
    const result = await service.getById('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deveria atualizar uma das motos com SUCESSO', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    const repository = new MotorcycleRepository();
    const service = new MotorcycleService(repository);
    const result = await service.update('6348513f34c397abcad040b2', motorcycleInput);
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
 
  it('Deveria retornar erro caso a moto não for encontrada', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const carRepository = new MotorcycleRepository();
    const service = new MotorcycleService(carRepository);
    
    try {
      await service.getById('6348513f34c397abcad040b2');
    } catch (error) {
      const err = error as HttpException;
      expect(err.message).to.be.equal('Motorcycle not found');
      expect(err.status).to.be.equal(404);
    }
  });

  afterEach(function () {
    sinon.restore();
  });  
});