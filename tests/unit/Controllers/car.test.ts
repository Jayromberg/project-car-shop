import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CarController from '../../../src/Controllers/CarController';
import CarService from '../../../src/Services/CarService';

import { carOutput, carInput, genericError } from '../../Utils/mock.car';

const { expect } = chai;
chai.use(sinonChai);

describe('CONTROLLER - Deveria trafegar os dados', function () {
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

  it('Deveria enviar todos os carros registrados com SUCESSO', async function () {
    const mReq: any = { params: {}, body: {} };
    const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const mNext = sinon.stub();
    
    sinon.stub(CarService.prototype, 'getAll').resolves([carOutput]);
    const Controller = new CarController(mReq, mRes, mNext);
    await Controller.findAll();
  
    expect(mRes.status).to.have.been.calledWith(200);
    expect(mRes.json).to.have.been.calledWith([carOutput]);
  });

  it('Deveria enviar um dos carros registrados com SUCESSO', async function () {
    const mReq: any = { params: { id: '6378d1c99b090153e49a4895' }, body: {} };
    const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const mNext = sinon.stub();
    
    sinon.stub(CarService.prototype, 'getById').resolves(carOutput);
    const Controller = new CarController(mReq, mRes, mNext);
    await Controller.findById();
  
    expect(mRes.status).to.have.been.calledWith(200);
    expect(mRes.json).to.have.been.calledWith(carOutput);
  });

  it('Deveria enviar um dos carros atualizado com SUCESSO', async function () {
    const mReq: any = { params: { id: '6378d1c99b090153e49a4895' }, body: carInput };
    const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const mNext = sinon.stub();
    
    sinon.stub(CarService.prototype, 'update').resolves(carOutput);
    const Controller = new CarController(mReq, mRes, mNext);
    await Controller.update();
  
    expect(mRes.status).to.have.been.calledWith(200);
    expect(mRes.json).to.have.been.calledWith(carOutput);
  });

  it('Deveria enviar um erro qualquer em caso de falha ao registrar', async function () {
    const mReq: any = { params: {}, body: carInput };
    const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const mNext = sinon.stub();
    
    sinon.stub(CarService.prototype, 'register').throws(genericError);
    const Controller = new CarController(mReq, mRes, mNext);
    await Controller.create();
  
    expect(mNext).to.have.calledWithExactly(genericError);
  });

  it(
    'Deveria enviar um erro qualquer em caso de falha ao buscar todos os carros', 
    async function () {
      const mReq: any = { params: {}, body: {} };
      const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
      const mNext = sinon.stub();
    
      sinon.stub(CarService.prototype, 'getAll').throws(genericError);
      const Controller = new CarController(mReq, mRes, mNext);
      await Controller.findAll();
  
      expect(mNext).to.have.calledWithExactly(genericError);
    },
  );

  it(
    'Deveria enviar um erro qualquer em caso de falha ao buscar um dos carros', 
    async function () {
      const mReq: any = { params: { id: '6378d1c99b090153e49a4895' }, body: {} };
      const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
      const mNext = sinon.stub();
    
      sinon.stub(CarService.prototype, 'getById').throws(genericError);
      const Controller = new CarController(mReq, mRes, mNext);
      await Controller.findById();
  
      expect(mNext).to.have.calledWithExactly(genericError);
    },
  );

  it(
    'Deveria enviar um erro qualquer em caso de falha ao atualizar um dos carros', 
    async function () {
      const mReq: any = { params: { id: '6378d1c99b090153e49a4895' }, body: carInput };
      const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
      const mNext = sinon.stub();
    
      sinon.stub(CarService.prototype, 'update').throws(genericError);
      const Controller = new CarController(mReq, mRes, mNext);
      await Controller.update();
  
      expect(mNext).to.have.calledWithExactly(genericError);
    },
  );
 
  afterEach(function () {
    sinon.restore();
  });  
});