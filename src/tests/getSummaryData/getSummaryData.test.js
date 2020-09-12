const getSummaryData = require('./getSummaryData');

let test1 = [
	{
		"id": 2,
		"name": "Anakin",
		"brush_color": "blue",
		"primary_insured_id": null,
		"contract_effective_date": "2018-01-01"
	},
	{
		"id": 3,
		"name": "Padme",
		"brush_color": "pink",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 4,
		"name": "Luke",
		"brush_color": "blue",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 5,
		"name": "Leia",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 6,
		"name": "Ben",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	}
];

test('getSummaryData test 1', () => {
  expect(getSummaryData(test1)).toEqual({
        "starterBoxesCount": 3,
        "starterBrushesCount": 5,
        "starterReplacementHeadsCount": 5,
        "refillBoxesCount": 2,
        "refillReplacementHeadsCount": 5
    });
});

let test2 = [
	{
		"id": 2,
		"name": "Anakin",
		"brush_color": "blue",
		"primary_insured_id": null,
		"contract_effective_date": "2018-01-01"
	},
	{
		"id": 3,
		"name": "Padme",
		"brush_color": "pink",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 4,
		"name": "Luke",
		"brush_color": "blue",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 5,
		"name": "Leia",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 6,
		"name": "Ben",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 7,
		"name": "Anakin",
		"brush_color": "blue",
		"primary_insured_id": null,
		"contract_effective_date": "2018-01-01"
	},
	{
		"id": 8,
		"name": "Padme",
		"brush_color": "pink",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 9,
		"name": "Luke",
		"brush_color": "blue",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 10,
		"name": "Leia",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 11,
		"name": "Ben",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	}
];

test('getSummaryData test 2', () => {
  expect(getSummaryData(test2)).toEqual({
        "starterBoxesCount": 5,
        "starterBrushesCount": 10,
        "starterReplacementHeadsCount": 10,
        "refillBoxesCount": 3,
        "refillReplacementHeadsCount": 10
    });
});

let test3 = [
	{
		"id": 2,
		"name": "Anakin",
		"brush_color": "blue",
		"primary_insured_id": null,
		"contract_effective_date": "2018-01-01"
	},
	{
		"id": 3,
		"name": "Padme",
		"brush_color": "pink",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 4,
		"name": "Luke",
		"brush_color": "blue",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	}
];

test('getSummaryData test 3', () => {
  expect(getSummaryData(test3)).toEqual({
        "starterBoxesCount": 2,
        "starterBrushesCount": 3,
        "starterReplacementHeadsCount": 3,
        "refillBoxesCount": 1,
        "refillReplacementHeadsCount": 3
    });
});