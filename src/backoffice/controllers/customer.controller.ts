import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';

//localhost:3000/customers
@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter os clientes';
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return 'Obter os clientes ' + document;
  }

  @Post()
  post(@Body() body: Customer) {
    let body.name

    return body;
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return {
      customer: document,
      data: body,
    };
  }
  @Delete(':document')
  delete(@Param('document') document) {
    return 'remover o cliente';
  }
}
