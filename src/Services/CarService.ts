import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import { SaveCar, GetAll } from '../Domains/UseCases';

export default class CarService {
  private _repository;

  constructor(repository: SaveCar & GetAll) {
    this._repository = repository;
  }

  private createCarDomain(data: ICar): Car {
    return new Car(data);
  }

  async register(car: ICar) {    
    const response = await this._repository.save(car);
    return this.createCarDomain(response);
  }

  async getAll() {
    const response = await this._repository.getAll();
    const carsArray = response.map((car) => this.createCarDomain(car));
    return carsArray;
  }
}
