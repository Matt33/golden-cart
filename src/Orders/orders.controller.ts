import { Controller, Post, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    checkout() {
        return this.ordersService.checkout();
    }

    @Get()
    getOrders() {
        return this.ordersService.getOrders();
    }
}
