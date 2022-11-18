import ICar from '../../Interfaces/ICar';

export interface SaveCar {
  save: (car: ICar) => Promise<ICar>;
}
