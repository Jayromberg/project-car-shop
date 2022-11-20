import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import { Save, GetAll, GetById, Update } from '../Domains/UseCases';
import HttpException from '../Utils/HttpException';

export default class CarService {
  private _repository;

  constructor(repository: Save & GetAll & GetById & Update) {
    this._repository = repository;
  }

  private createCarDomain(data: ICar | null): Car {
    if (!data) {
      throw new HttpException(404, 'Car not found');
    }
    return new Car(data);
  }

  async register(car: ICar) {    
    const response = await this._repository.save(car);
    return this.createCarDomain(response);
  }

  async getAll() {
    const response = await this._repository.getAll();
    const carsArray = response.map((car: ICar) => this.createCarDomain(car));
    return carsArray;
  }

  async getById(id: string) {
    const response = await this._repository.getById(id);
    return this.createCarDomain(response);
  }

  async update(id: string, data: ICar) {
    const response = await this._repository.update(id, data);
    return this.createCarDomain(response);
  }
}
