const getStarterCardsData = require('./getStarterCardsData');

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

test('getStarterCardsData test 1', () => {
  expect(getStarterCardsData(test1)).toEqual([
  	 {
        "key": 0,
        "colorOne": "blue",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    },
    {
        "key": 1,
        "colorOne": "green",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    },
    {
        "key": 2,
        "colorOne": "pink",
        "colorTwo": "",
        "brushesCount": 1,
        "replacementHeadsCount": 1
    }
    ]);
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

test('getStarterCardsData test 2', () => {
  expect(getStarterCardsData(test2)).toEqual([ 
  	{
        "key": 0,
        "colorOne": "blue",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    },
    {
        "key": 1,
        "colorOne": "blue",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    },
    {
        "key": 2,
        "colorOne": "green",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    },
    {
        "key": 3,
        "colorOne": "green",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    },
    {
        "key": 4,
        "colorOne": "pink",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    }
    ]);
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
	},
	{
		"id": 5,
		"name": "Leia",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
];

test('getStarterCardsData test 3', () => {
  expect(getStarterCardsData(test3)).toEqual([ 
  	{
        "key": 0,
        "colorOne": "blue",
        "colorTwo": "",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    },
    {
        "key": 1,
        "colorOne": "green",
        "colorTwo": "pink",
        "brushesCount": 2,
        "replacementHeadsCount": 2
    }
    ]);
});