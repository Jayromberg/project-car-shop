import ICar from '../../Interfaces/ICar';

export default interface SaveCar {
  save(car: ICar): Promise<ICar>;
}
