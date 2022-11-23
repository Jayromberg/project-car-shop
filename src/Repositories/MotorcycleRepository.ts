import MotorcycleODM from '../Models/MotorcycleODM';
import { 
  SaveMotorcycles, 
  GetAllMotorcycles, 
  GetByMotorcycleId,
} from '../Domains/UseCases/motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleRepository implements SaveMotorcycles,
   GetAllMotorcycles, GetByMotorcycleId {
  private _model = new MotorcycleODM();
     
  async save(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    const newMotorcycle = await this._model.create(motorcycle);
    return newMotorcycle;
  }

  async getAll(): Promise<IMotorcycle[]> {
    const allMotorcycles = await this._model.findAll();
    return allMotorcycles;
  }

  async getById(id: string): Promise<IMotorcycle | null> {
    const motorcycle = await this._model.findById(id);
    return motorcycle;
  }
}