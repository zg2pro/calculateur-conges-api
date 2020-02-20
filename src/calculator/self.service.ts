import {HttpService, Injectable, Optional} from '@nestjs/common';
import {CalculatorInput} from './calculator-input';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {AxiosResponse} from 'axios';

@Injectable()
export class SelfService {

    constructor(@Optional() private readonly http: HttpService) {
    }


    calculation(input: CalculatorInput): Observable<AxiosResponse<number>> {
        return this.http.post('http://localhost:9080/rest/api/nest/calculation', input).pipe(
            map(response => response.data)
        );
    }

}
