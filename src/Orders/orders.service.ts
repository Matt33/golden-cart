import { Injectable, BadRequestException } from '@nestjs/common';
import { Order } from './orders.interface';
import { CartService } from '../Cart/cart.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
    private orders: Order[] = [];
    private currentId = 1;

    constructor(
        private cartService: CartService,
        private productsService: ProductsService,
    ) { }

    checkout(): Order {
        const cartItems = this.cartService.getCart();

        if (cartItems.length === 0) {
            throw new BadRequestException('Cart is empty. Cannot process order.');
        }

        let totalAmount = 0;
        for (const item of cartItems) {
            const product = this.productsService.findById(item.productId);
            if (product) {
                totalAmount += product.price * item.quantity;
            }
        }

        const order: Order = {
            id: this.currentId++,
            items: [...cartItems],
            totalAmount,
            createdAt: new Date().toISOString(),
        };

        this.orders.push(order);
        this.cartService.clearCart();

        return order;
    }

    getOrders(): Order[] {
        return this.orders;
    }
}
