import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import { SaveCar, GetAll, GetById } from '../Domains/UseCases';

export default class CarService {
  private _repository;

  constructor(repository: SaveCar & GetAll & GetById) {
    this._repository = repository;
  }

  private createCarDomain(data: ICar | null): Car | null {
    if (!data) {
      return null;
    }

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

  async getById(id: string) {
    const response = await this._repository.getById(id);
    return this.createCarDomain(response);
  }
}
