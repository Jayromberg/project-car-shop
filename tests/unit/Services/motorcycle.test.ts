import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleRepository from '../../../src/Repositories/MotorcycleRepository';
import MotorcycleService from '../../../src/Services/MotorcycleService';

import { motorcycleInput, motorcycleOutput } from '../../Utils/mock.motorcycle';
// import HttpException from '../../../src/Utils/HttpException';

describe('SERVICE - Deveria trafegar os dados das motos', function () {
  it('Deveria registrar uma moto com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const repository = new MotorcycleRepository();
    const service = new MotorcycleService(repository);
    const result = await service.register(motorcycleInput);
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });  
});