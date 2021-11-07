export enum Unit {
  WEIGHT = 'gram',
  PIECES = 'pieces',
  PACKS = 'packs'
}

export interface Product {
  name: string,
  amount: string,
  unit: Unit
}

export enum ButtonTypes {
  SUBMIT = 'submit',
  DELETE = 'delete'
}
