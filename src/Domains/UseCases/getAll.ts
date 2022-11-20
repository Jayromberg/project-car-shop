import ICar from '../../Interfaces/ICar';

export default interface GetAll {
  getAll(): Promise<ICar[]>;
}