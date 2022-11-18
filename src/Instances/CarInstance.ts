import CarRepository from '../Repositories/CarRepository';
import CarService from '../Services/CarService';

export default class CarInstance {
  public static main() {
    const carRepository = new CarRepository();
    const carService = new CarService(carRepository);

    return carService;
  }
}
