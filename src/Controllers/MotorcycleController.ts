import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleRepository from '../Repositories/MotorcycleRepository';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcycleRepository: MotorcycleRepository;
  private motorcycleService: MotorcycleService;
  private motorcycle: IMotorcycle;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcycleRepository = new MotorcycleRepository();
    this.motorcycleService = new MotorcycleService(this.motorcycleRepository);
    this.motorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity, 
    };
  }

  public async create() {
    try {
      const newMotorcycle = await this.motorcycleService.register(this.motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motorcycles = await this.motorcycleService.getAll();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    
    try {
      const motorcycles = await this.motorcycleService.getById((id).toString());
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;

    try {
      const response = await this.motorcycleService.update(id, this.motorcycle);
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;
