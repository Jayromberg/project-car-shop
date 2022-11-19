import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarRepository from '../../../src/Repositories/CarRepository';
import CarService from '../../../src/Services/CarService';

import { carInput, carOutput } from '../../Utils/mock.car';

describe('Deveria registrar um carro no banco', function () {
  it('Deveria registrar um carro com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const carRepository = new CarRepository();
    const service = new CarService(carRepository);
    const result = await service.register(carInput);
    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });
 
  // afterEach(function () {
  //   sinon.restore();
  // });  
});