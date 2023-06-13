import { Address } from './address';
import { Capacity } from './capacity';
import { TimeInterval } from './time-interval';

export interface Event {
  id?: number;
  title: string;
  price: number;
  description?: string;
  address: Address;
  timeInterval: TimeInterval;
  capacity: Capacity;
}
