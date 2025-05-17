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
import { Result } from '../models/result.model'; // Se for realmente um módulo, deixe assim. Senão, use .model.ts

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result('', true, {}, null);
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return new Result('', true, [], null);
  }

  @Post()
  post(@Body() body: Customer) {
    return new Result('Cliente criado com sucesso', true, body, null);
  }

  @Put(':document')
  put(@Param('document') document: string, @Body() body: Customer) {
    return new Result('Cliente alterado com sucesso', true, body, null);
  }

  @Delete(':document')
  delete(@Param('document') document: string) {
    return new Result('Cliente deletado com sucesso!', true, null, null);
  }
}
