import IMotorcycle from '../../../Interfaces/IMotorcycle';

export default interface GetAllMotorcycles {
  getAll(): Promise<IMotorcycle[]>;
}