import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarRepository from '../../../src/Repositories/CarRepository';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

describe('Deveria registrar um carro no banco', function () {
  it('Deveria registrar um carro com SUCESSO', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    const carOutput: Car = new Car({
      id: '6378d1c99b090153e49a4895',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(carOutput);

    const carRepository = new CarRepository();
    const service = new CarService(carRepository);
    const result = await service.register(carInput);
    expect(result).to.be.deep.equal(carOutput);
  });
 
  afterEach(function () {
    sinon.restore();
  });  
});