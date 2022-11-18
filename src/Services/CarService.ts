import Car from '../Domains/Car';
import SaveCar from '../Domains/useCases';
import { ICar } from '../Interfaces/ICar';

export default class CarService {
  private _repository;

  constructor(repository: SaveCar) {
    this._repository = repository;
  }

  private createCarDomain(car: ICar | null): ICar | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async register(car: ICar) {
    const response = await this._repository.save(car);
    return this.createCarDomain(response);
  }
}
