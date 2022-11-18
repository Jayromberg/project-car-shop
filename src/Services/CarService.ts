import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private _repository;

  constructor(repository: any) {
    this._repository = repository;
  }

  private createCarDomain(data: ICar | null): Car | null {
    if (data) {
      return new Car(data);
    }
    return null;
  }

  async register(car: ICar) {    
    const response = await this._repository.save(car);
    return this.createCarDomain(response);
  }
}
