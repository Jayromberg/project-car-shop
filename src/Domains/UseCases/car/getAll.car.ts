import ICar from '../../../Interfaces/ICar';

export default interface GetAllCars {
  getAll(): Promise<ICar[]>;
}