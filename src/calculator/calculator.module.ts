import {HttpModule, Module} from '@nestjs/common';
import {CalculatorController} from './calculator.controller';
import {CalculatorService} from './calculator.service';
import {SelfService} from './self.service';

const modules = [
    HttpModule
];

@Module({
    imports: [...modules],
    controllers: [CalculatorController],
    providers: [CalculatorService, SelfService],
})
export class CalculationModule {
}
