import IMotorcycle from '../../../Interfaces/IMotorcycle';

export default interface SaveMotorcycles {
  save(motorcycle: IMotorcycle): Promise<IMotorcycle>;
}
