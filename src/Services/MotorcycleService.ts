import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import { 
  SaveMotorcycles, 
  GetAllMotorcycles,
  GetByMotorcycleId,
  UpdateMotorcycle,
} from '../Domains/UseCases/motorcycle';
import HttpException from '../Utils/HttpException';

export default class MotorcycleService {
  private _repository;

  constructor(repository: SaveMotorcycles & GetAllMotorcycles & GetByMotorcycleId
  & UpdateMotorcycle) {
    this._repository = repository;
  }

  private createCarDomain(data: IMotorcycle | null): Motorcycle {
    if (!data) {
      throw new HttpException(404, 'Motorcycle not found');
    }
    return new Motorcycle(data);
  }

  async register(motorcycle: IMotorcycle) {    
    const response = await this._repository.save(motorcycle);
    return this.createCarDomain(response);
  }

  async getAll() {
    const response = await this._repository.getAll();
    const motorcyclesArray = response
      .map((motorcycle: IMotorcycle) => this.createCarDomain(motorcycle));
    return motorcyclesArray;
  }

  async getById(id: string) {
    const response = await this._repository.getById(id);
    return this.createCarDomain(response);
  }

  async update(id: string, data: IMotorcycle) {
    const response = await this._repository.update(id, data);
    return this.createCarDomain(response);
  }
}
