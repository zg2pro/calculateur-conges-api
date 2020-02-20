import { Controller, Get, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { SelfService } from './self.service';
import { CalculatorInput } from './calculator-input';
import {map} from "rxjs/operators";

@Controller()
export class CalculatorController {
  constructor(private readonly appService: CalculatorService,
              private readonly selfService: SelfService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/run')
  run(@Body() input: CalculatorInput): number {
    return this.appService.calculation(input);
  }

  @Post('/self')
  self(@Body() input: CalculatorInput) {
    return this.selfService.calculation(input).pipe(
        map(function(response: any){
          console.log("response.data:"+ response.data)
          return response.data
        })
    );
  }
}
