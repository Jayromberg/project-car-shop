import ICar from '../../../Interfaces/ICar';

export default interface UpdateCar {
  update(id: string, data: ICar): Promise<ICar | null>;
}