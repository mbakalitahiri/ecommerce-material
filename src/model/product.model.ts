export class Product {
  constructor(
    public productCode: number,
    public productName: string,
    public category: string,
    public productScale: string,
    public productVendor: string,
    public productDescription: string,
    public quantityInStock: string,
    public buyPrice: number,
    public MSRP: number
  ) {}
}
