import ICar from '../../../Interfaces/ICar';

export default interface GetByCarId {
  getById(id: string): Promise<ICar | null>;
}