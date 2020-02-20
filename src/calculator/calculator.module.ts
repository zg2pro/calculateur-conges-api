import { Module } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';
import { SelfService } from './self.service';
import { HttpModule  } from '@nestjs/common';

const modules = [HttpModule];

@Module({
  imports: [...modules],
  exports: [...modules],
  controllers: [CalculatorController],
  providers: [CalculatorService, SelfService],
})
export class CalculationModule {}
