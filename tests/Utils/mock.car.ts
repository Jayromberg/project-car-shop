import Car from '../../src/Domains/Car';
import ICar from '../../src/Interfaces/ICar';
import HttpException from '../../src/Utils/HttpException';

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

const genericError : HttpException = new HttpException(500, 'Internal Server Error');

export {
  carInput,
  carOutput,
  genericError,
};
