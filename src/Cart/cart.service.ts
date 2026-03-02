import { Injectable, NotFoundException } from '@nestjs/common';
import { CartItem } from './cart.interface';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
    private cart: CartItem[] = [];

    constructor(private productsService: ProductsService) { }

    getCart(): CartItem[] {
        return this.cart;
    }

    addToCart(productId: number, quantity: number): CartItem[] {
        const product = this.productsService.findById(productId);
        if (!product) {
            throw new NotFoundException(`Product with ID ${productId} not found`);
        }

        const existingItemIndex = this.cart.findIndex(item => item.productId === productId);
        if (existingItemIndex > -1) {
            this.cart[existingItemIndex].quantity += quantity;
        } else {
            this.cart.push({ productId, quantity });
        }

        return this.cart;
    }

    removeFromCart(productId: number): CartItem[] {
        this.cart = this.cart.filter(item => item.productId !== productId);
        return this.cart;
    }

    clearCart(): void {
        this.cart = [];
    }
}
