import IMotorcycle from '../../../Interfaces/IMotorcycle';

export default interface GetByMotorcycleId {
  getById(id: string): Promise<IMotorcycle | null>;
}
