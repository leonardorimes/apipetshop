import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

//localhost:3000/customers
@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter os clientes';
  }

  @Post()
  post() {
    return 'Criar os clientes';
  }

  @Put()
  put() {
    return 'Atualizar os clientes';
  }

  @Delete()
  delete() {
    return 'remover os clientes';
  }
}
