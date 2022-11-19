import ICar from '../../Interfaces/ICar';

export default interface GetById {
  getById(id: string): Promise<ICar | null>;
}