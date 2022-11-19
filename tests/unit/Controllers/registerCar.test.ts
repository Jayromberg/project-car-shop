// import { expect } from 'chai';
// import sinon from 'sinon';
// import Car from '../../../src/Domains/Car';
// import CarController from '../../../src/Controllers/CarController';
// import CarService from '../../../src/Services/CarService';

// describe('Deveria encaminhar os dados para o registro de um carro', function () {
//   it('Deveria encaminhar os dados para registrar um carro com SUCESSO', async function () {
//     const mockDB = sinon.spy();
//     const services = new CarService(mockDB);

//     const carOutput: Car = new Car({
//       id: '6378d1c99b090153e49a4895',
//       model: 'Marea',
//       year: 2002,
//       color: 'Black',
//       status: true,
//       buyValue: 15.990,
//       doorsQty: 4,
//       seatsQty: 5,
//     });
    
//     const mReq: any = {
//       body: {
//         model: 'Marea',
//         year: 2002,
//         color: 'Black',
//         status: true,
//         buyValue: 15.990,
//         doorsQty: 4,
//         seatsQty: 5,
//       },
//     };
    
//     const mRes: any = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    
//     const mNext = sinon.stub();
    
//     mRes.status = sinon.stub().returnsThis();
//     mRes.json = sinon.stub();
    
//     sinon.stub(services, 'register').resolves(carOutput);
//     const Controller = new CarController(mReq, mRes, mNext);
//     await Controller.create();
  
//     mRes.should.have.been.calledWith(201);
//     expect(mRes).to.have.been.caller(201);
//     expect(mRes.status.calledWith).to.be.equal(201);
//     expect(mRes.json).to.be.deep.equal(carOutput);
//   });
 
//   afterEach(function () {
//     sinon.restore();
//   });  
// });