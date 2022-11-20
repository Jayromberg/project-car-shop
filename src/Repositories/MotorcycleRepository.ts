import MotorcycleODM from '../Models/MotorcycleODM';
import { SaveMotorcycles } from '../Domains/UseCases/motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleRepository implements SaveMotorcycles {
  private _model = new MotorcycleODM();

  async save(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    const newMotorcycle = await this._model.create(motorcycle);
    return newMotorcycle;
  }
}