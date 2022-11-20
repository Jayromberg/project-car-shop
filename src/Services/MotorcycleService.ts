import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import { SaveMotorcycles } from '../Domains/UseCases/motorcycle';
import HttpException from '../Utils/HttpException';

export default class MotorcycleService {
  private _repository;

  constructor(repository: SaveMotorcycles) {
    this._repository = repository;
  }

  private createCarDomain(data: IMotorcycle | null): Motorcycle {
    if (!data) {
      throw new HttpException(404, 'Car not found');
    }
    return new Motorcycle(data);
  }

  async register(motorcycle: IMotorcycle) {    
    const response = await this._repository.save(motorcycle);
    return this.createCarDomain(response);
  }
}
