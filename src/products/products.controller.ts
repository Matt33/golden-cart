import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  getAllProducts(
    @Query('maxPrice') maxPrice?: string,
    @Query('search') search?: string,
    @Query('tier') tier?: string,
  ) {
    const filter = {
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      search: search?.trim() || undefined,
      tier: tier?.trim() || undefined,
    };
    return this.productsService.findAll(filter);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.findById(Number(id));
  }
}
