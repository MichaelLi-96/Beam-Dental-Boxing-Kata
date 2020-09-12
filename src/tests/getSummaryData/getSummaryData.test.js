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

test('test 1', () => {
  expect(getSummaryData(test1)).toEqual({
        "starterBoxesCount": 3,
        "starterBrushesCount": 5,
        "starterReplacementHeadsCount": 5,
        "refillBoxesCount": 2,
        "refillReplacementHeadsCount": 5
    });
});