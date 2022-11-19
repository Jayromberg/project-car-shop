import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private _repository;

  constructor(repository: any) {
    this._repository = repository;
  }

  private createCarDomain(data: ICar): Car {
    return new Car(data);
  }

  async register(car: ICar) {    
    const response = await this._repository.save(car);
    return this.createCarDomain(response);
  }
}
