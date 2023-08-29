import { BaseEntity } from '../../../types';

export type Account = {
  name: string;
  gallons: number;
  address: string;
  city: string;
  postalCode: string;
} & BaseEntity;
