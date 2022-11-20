import ICar from '../../Interfaces/ICar';

export default interface Save {
  save(car: ICar): Promise<ICar>;
}
