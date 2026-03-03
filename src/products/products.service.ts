import { Injectable } from '@nestjs/common';
import { Product } from './products';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, title: "Laptop", description: "Powerful laptop", price: 1599, image: "/laptop.png", tier: "Premium" },
    { id: 2, title: "Laptop", description: "Powerful laptop", price: 1399, image: "/laptop.png", tier: "Pro" },
    { id: 3, title: "Laptop", description: "Powerful laptop", price: 1199, image: "/laptop.png", tier: "Plus" },
    { id: 4, title: "Laptop", description: "Powerful laptop", price: 999, image: "/laptop.png", tier: "Standard" },
    { id: 5, title: "Laptop", description: "Powerful laptop", price: 799, image: "/laptop.png", tier: "Budget" },
    { id: 6, title: "Phone", description: "Smartphone device", price: 1199, image: "/iphone.png", tier: "Premium" },
    { id: 7, title: "Phone", description: "Smartphone device", price: 999, image: "/iphone.png", tier: "Pro" },
    { id: 8, title: "Phone", description: "Smartphone device", price: 849, image: "/iphone.png", tier: "Plus" },
    { id: 9, title: "Phone", description: "Smartphone device", price: 699, image: "/iphone.png", tier: "Standard" },
    { id: 10, title: "Phone", description: "Smartphone device", price: 549, image: "/iphone.png", tier: "Budget" },
    { id: 11, title: "Headset", description: "Gaming headset", price: 299, image: "/headset.png", tier: "Premium" },
    { id: 12, title: "Headset", description: "Gaming headset", price: 249, image: "/headset.png", tier: "Pro" },
    { id: 13, title: "Headset", description: "Gaming headset", price: 199, image: "/headset.png", tier: "Plus" },
    { id: 14, title: "Headset", description: "Gaming headset", price: 149, image: "/headset.png", tier: "Standard" },
    { id: 15, title: "Headset", description: "Gaming headset", price: 99, image: "/headset.png", tier: "Budget" },
    { id: 16, title: "Watch", description: "Smart watch", price: 429, image: "/watch.png", tier: "Premium" },
    { id: 17, title: "Watch", description: "Smart watch", price: 369, image: "/watch.png", tier: "Pro" },
    { id: 18, title: "Watch", description: "Smart watch", price: 299, image: "/watch.png", tier: "Plus" },
    { id: 19, title: "Watch", description: "Smart watch", price: 249, image: "/watch.png", tier: "Standard" },
    { id: 20, title: "Watch", description: "Smart watch", price: 199, image: "/watch.png", tier: "Budget" }
  ];

  findAll(filter?: { maxPrice?: number; search?: string; tier?: string }) {
    if (!filter || (!filter.maxPrice && !filter.search && !filter.tier)) {
      return this.products;
    }
    return this.products.filter((p) => {
      if (filter.maxPrice != null && p.price > filter.maxPrice) return false;
      if (filter.tier && p.tier !== filter.tier) return false;
      if (filter.search) {
        const term = filter.search.toLowerCase();
        if (!p.title.toLowerCase().includes(term) && !p.description.toLowerCase().includes(term)) return false;
      }
      return true;
    });
  }

  findById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
