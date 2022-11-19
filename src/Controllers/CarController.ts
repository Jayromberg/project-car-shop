import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarRepository from '../Repositories/CarRepository';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carRepository: CarRepository;
  private carService: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carRepository = new CarRepository();
    this.carService = new CarService(this.carRepository);
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty, 
    };

    try {
      const newCar = await this.carService.register(car);
      console.log(newCar);
      
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
