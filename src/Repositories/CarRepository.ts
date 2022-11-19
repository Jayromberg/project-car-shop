import CarODM from '../Models/CarODM';
import { SaveCar, GetAll, GetById } from '../Domains/UseCases';
import ICar from '../Interfaces/ICar';

export default class CarRepository implements SaveCar, GetAll, GetById {
  private _model = new CarODM();
  
  async save(car: ICar) {
    const newCar = await this._model.create(car);
    return newCar;
  }
  
  async getAll() {
    const allCars = await this._model.findAll();
    return allCars;
  }

  async getById(id: string): Promise<ICar | null> {
    const car = await this._model.findById(id);
    return car;
  }
}