import CarODM from '../Models/CarODM';
import SaveCar from '../Domains/UseCases';
import ICar from '../Interfaces/ICar';

export default class CarRepository implements SaveCar {
  private _model = new CarODM();

  save(car: ICar) {
    const newCar = this._model.create(car);
    return newCar;
  }
}