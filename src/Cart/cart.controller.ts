import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Get()
    getCart() {
        return this.cartService.getCart();
    }

    @Post()
    addToCart(@Body() body: { productId: number; quantity: number }) {
        return this.cartService.addToCart(body.productId, body.quantity);
    }

    @Delete(':productId')
    removeFromCart(@Param('productId') productId: string) {
        return this.cartService.removeFromCart(Number(productId));
    }
}
