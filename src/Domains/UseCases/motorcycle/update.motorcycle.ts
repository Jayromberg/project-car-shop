import IMotorcycle from '../../../Interfaces/IMotorcycle';

export default interface UpdateMotorcycle {
  update(id: string, data: IMotorcycle): Promise<IMotorcycle | null>;
}
