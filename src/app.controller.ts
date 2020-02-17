import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculationInput } from './calculation-input';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/run')
  run(@Body() input: CalculationInput): number {
    return this.appService.calculation(input);
  }
}
