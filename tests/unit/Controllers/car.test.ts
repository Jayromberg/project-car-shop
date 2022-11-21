import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CarController from '../../../src/Controllers/CarController';
import CarService from '../../../src/Services/CarService';

import { carOutput, carInput } from '../../Utils/mock.car';

const { expect } = chai;
chai.use(sinonChai);

describe('Deveria encaminhar os dados para o registro de um carro', function () {
  it('Deveria encaminhar os dados para registrar um carro com SUCESSO', async function () {
    const mReq: any = {
      body: carInput,
    };
    const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const mNext = sinon.stub();
    
    sinon.stub(CarService.prototype, 'register').resolves(carOutput);
    const Controller = new CarController(mReq, mRes, mNext);
    await Controller.create();
  
    expect(mRes.status).to.have.been.calledWith(201);
    expect(mRes.json).to.have.been.calledWith(carOutput);
  });
 
  afterEach(function () {
    sinon.restore();
  });  
});