#! /bin/bash

curl -d '{
	"startDate": "12-09-2019",
	"endDate": "31-01-2020",
	"unpaidWeeks": 3,
	"extraUnpaidDays": 5,
	"businessOpenOnSaturdays": true
}' -H "Content-Type: application/json" -X POST http://localhost:3000/run
