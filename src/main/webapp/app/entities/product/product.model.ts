export interface IProduct {
  id?: number;
  name?: string | null;
  description?: string | null;
}

export class Product implements IProduct {
  constructor(public id?: number, public name?: string | null, public description?: string | null) {}
}

export function getProductIdentifier(product: IProduct): number | undefined {
  return product.id;
}
