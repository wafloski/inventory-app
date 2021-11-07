import { Product, Unit } from 'types/types';

export const products: Product[] = [
  {
    name: 'Pomidory',
    amount: '4',
    unit: Unit.PIECES
  },
  {
    name: 'Cebula',
    amount: '300',
    unit: Unit.WEIGHT
  },
  {
    name: 'Ogórek',
    amount: '2',
    unit: Unit.PACKS
  }
];
