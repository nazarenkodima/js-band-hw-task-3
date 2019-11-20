import Truck from '../Truck.js';
import Ship from '../Ship.js';

export default class TransportFactory {
  static createTransport(type, ...args) {
    switch (type) {
      case 'truck':
        return new Truck(...args);
      case 'ship':
        return new Ship(...args);

      default:
        return new Truck(...args);
    }
  }
}
