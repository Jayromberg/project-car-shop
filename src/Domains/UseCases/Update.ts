import ICar from '../../Interfaces/ICar';

export default interface Update {
  update(id: string, data: ICar): Promise<ICar | null>;
}