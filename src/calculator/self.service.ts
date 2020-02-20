import {HttpService, Inject, Injectable} from '@nestjs/common';
import {CalculatorInput} from './calculator-input';
import {map} from "rxjs/operators";


@Injectable()
export class SelfService {

    constructor(@Inject(HttpService) protected http) {
    }

    public calculation(input: CalculatorInput) {
        return this.http.post('http://localhost:9080/rest/api/nest/calculation', input);
    }

}
