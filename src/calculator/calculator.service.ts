import { Injectable  } from '@nestjs/common';
import * as momentBd from 'moment-business-days';
import { CalculatorInput } from './calculator-input';
//import { HttpService  } from '@nestjs/common';
//import { Observable } from 'rxjs'
//import {map} from "rxjs/operators";

@Injectable()
export class CalculatorService {

  //constructor(private readonly http: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  calculation(input: CalculatorInput): number {
    let factor = 0;
    // holidays are already computed inside of the businessDays api
  //  let holidays: ['01-11-2019', '11-11-2019', '25-12-2019', '01-01-2020'];
    let totalUnpaidDays = input.extraUnpaidDays;

    if (input.businessOpenOnSaturdays) {
      momentBd.updateLocale('fr', {
      //  holidays: holidays,
        workingWeekdays: [1, 2, 3, 4, 5, 6],
      });
      factor = 30 / 12;
      totalUnpaidDays += 6 * input.unpaidWeeks;
    } else {
      momentBd.updateLocale('fr', {
      //  holidays: holidays,
        workingWeekdays: [1, 2, 3, 4, 5],
      });
      factor = 25 / 12;
      totalUnpaidDays += 5 * input.unpaidWeeks;
    }

    let momentStart = momentBd(input.startDate, 'DD-MM-YYYY');
    let momentEnd = momentBd(input.endDate, 'DD-MM-YYYY');
    let bDaysTotal = momentEnd.businessDiff(momentStart);
    let nbOfMonths = momentEnd.diff(momentStart, 'months')  + 1;
    return ((bDaysTotal - totalUnpaidDays) * factor * nbOfMonths) / bDaysTotal;
  }
/*
  selfCall(input: CalculatorInput): Observable<number> {
    return this.http.post('http://localhost:9080/rest/api/nest/calculation', input).pipe(
        map(response => response.data)
    );
  }*/

}
