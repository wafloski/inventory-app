export enum Unit {
  WEIGHT = 'gram',
  PIECE = 'pieces',
  PACKS = 'packs'
}

export interface Product {
  name: string,
  amount: string,
  unit: Unit
}
