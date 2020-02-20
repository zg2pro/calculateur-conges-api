import {HttpModule, HttpService, Module} from '@nestjs/common';
import {CalculatorController} from './calculator.controller';
import {CalculatorService} from './calculator.service';
import {SelfService} from './self.service';
import {AXIOS_INSTANCE_TOKEN} from "@nestjs/common/http/http.constants";
import Axios from 'axios';

const modules = [
    HttpModule
];

@Module({
    imports: [...modules],
    controllers: [CalculatorController],
    providers: [CalculatorService
        , SelfService, {
            provide: AXIOS_INSTANCE_TOKEN,
            useValue: Axios,
        }, {
            provide: 'HttpService',
            useClass: HttpService
        }],
})
export class CalculationModule {
}
