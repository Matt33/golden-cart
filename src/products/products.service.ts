import { Injectable } from '@nestjs/common';
import { Product } from './products';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: "Laptop",
      description: "Powerful laptop",
      price: 15000,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Phone",
      description: "Smartphone device",
      price: 8000,
      image: "https://via.placeholder.com/150"
    }
  ];

  findAll() {
    return this.products;
  }

  findById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
