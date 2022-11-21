import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarRepository from '../../../src/Repositories/CarRepository';

import { carInput, carOutput } from '../../Utils/mock.car';
import HttpException from '../../../src/Utils/HttpException';

describe('Deveria executar o registro do carro no banco', function () {
  it('Deveria executar o registro do carro com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const carRepository = new CarRepository();
    const result = await carRepository.save(carInput);
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria executar a busca por todos os carro com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);

    const carRepository = new CarRepository();
    const result = await carRepository.getAll();
    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deveria executar a busca por um carro através do id com SUCESSO', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const carRepository = new CarRepository();
    const result = await carRepository.getById('6378d1c99b090153e49a4895');
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria executar a atualização de um carro através do id com SUCESSO', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const carRepository = new CarRepository();
    const result = await carRepository.update('6378d1c99b090153e49a4895', carInput);
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria alertar ao tentar atualização um carro através do id invalido', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const carRepository = new CarRepository();

    try {
      await carRepository.update('ID_INVALIDO', carInput);
    } catch (error) {
      const err = error as HttpException;
      expect(err.message).to.be.equal('Invalid mongo id');
      expect(err.status).to.be.equal(422);
    }
  });

  it('Deveria alertar ao tentar buscar um carro através do id invalido', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const carRepository = new CarRepository();

    try {
      await carRepository.getById('ID_INVALIDO');
    } catch (error) {
      const err = error as HttpException;
      expect(err.message).to.be.equal('Invalid mongo id');
      expect(err.status).to.be.equal(422);
    }
  });
 
  afterEach(function () {
    sinon.restore();
  });  
});