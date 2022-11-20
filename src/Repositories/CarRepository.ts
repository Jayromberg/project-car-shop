import CarODM from '../Models/CarODM';
import { Save, GetAll, GetById, Update } from '../Domains/UseCases';
import ICar from '../Interfaces/ICar';

export default class CarRepository implements Save, GetAll, GetById, Update {
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

  async update(id: string, data: ICar): Promise<ICar | null> {
    const response = await this._model.update(id, data);
    return response;
  }
}