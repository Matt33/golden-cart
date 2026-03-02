import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CartModule } from '../Cart/cart.module';
import { ProductsModule } from '../products/products.module';

@Module({
    imports: [CartModule, ProductsModule],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule { }
