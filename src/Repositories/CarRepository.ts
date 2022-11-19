import CarODM from '../Models/CarODM';
import { SaveCar, GetAll } from '../Domains/UseCases';
import ICar from '../Interfaces/ICar';

export default class CarRepository implements SaveCar, GetAll {
  private _model = new CarODM();
  
  async save(car: ICar) {
    const newCar = await this._model.create(car);
    return newCar;
  }
  
  async getAll() {
    const allCars = await this._model.findAll();
    return allCars;
  }
}