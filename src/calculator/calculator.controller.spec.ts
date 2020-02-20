import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';

describe('AppController', () => {
  let appController: CalculatorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [CalculatorService],
    }).compile();

    appController = app.get<CalculatorController>(CalculatorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('run', () => {
    it('should return the right number of days off acquired', () => {
      var expected = expect(appController.run({
        "startDate": "12-09-2019",
        "endDate": "31-01-2020",
        "unpaidWeeks": 3,
        "extraUnpaidDays": 5,
        "businessOpenOnSaturdays": false
      }));
      expected.toBeGreaterThan(8);
      expected.toBeLessThan(9);
    });

    it('should return the right number of days off acquired also with saturdays', () => {
      var expected = expect(appController.run({
        "startDate": "12-09-2019",
        "endDate": "31-01-2020",
        "unpaidWeeks": 3,
        "extraUnpaidDays": 5,
        "businessOpenOnSaturdays": true
      }));
      expected.toBeGreaterThan(10);
      expected.toBeLessThan(11);
    });
  });
});
