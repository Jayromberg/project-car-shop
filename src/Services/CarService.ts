import { ICar } from '../Interfaces/ICar';

export interface ICarRepository {
  create: (car: ICar) => Promise<ICar>;
}

export default class CarService {
  private _repository;

  constructor(repository: ICarRepository) {
    this._repository = repository;
  }

  async create(car: ICar) {
    const teams = await this._repository.create(car);
    return teams;
  }
}
