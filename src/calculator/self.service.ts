import {HttpService, Injectable, Inject} from '@nestjs/common';
import {CalculatorInput} from './calculator-input';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {AxiosResponse} from 'axios';


@Injectable()
export class SelfService {

    constructor(@Inject(HttpService) protected http) {
    }

    public calculation(input: CalculatorInput): Observable<AxiosResponse<number>> {
        return this.http.post('http://localhost:9080/rest/api/nest/calculation', input).pipe(
            map(function(response: any){
                return response.data
            })
        );
    }

}
