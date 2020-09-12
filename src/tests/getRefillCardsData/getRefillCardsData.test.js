const getRefillCardsData = require('./getRefillCardsData');

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

test('getRefillCardsData test 1 (2b, 2g, 1p)', () => {
  expect(getRefillCardsData(test1)).toEqual([
	    {
	        "key": 0,
	        "colorCount": 2,
	        "firstRowColor": "blue",
	        "firstRowReplacementHeadsCount": 2,
	        "secondRowColor": "green",
	        "secondRowReplacementHeadsCount": 2,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
	    },
	   	{
	        "key": 1,
	        "colorCount": 1,
	        "firstRowColor": "pink",
	        "firstRowReplacementHeadsCount": 1,
	        "secondRowColor": "",
	        "secondRowReplacementHeadsCount": 0,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
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
		"brush_color": "pink",
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
	}
];

test('getRefillCardsData test 2 (3b, 3g, 3p)', () => {
  expect(getRefillCardsData(test2)).toEqual([
	    {
	        "key": 0,
	        "colorCount": 2,
	        "firstRowColor": "blue",
	        "firstRowReplacementHeadsCount": 3,
	        "secondRowColor": "pink",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
	    },
	   	{
	        "key": 1,
	        "colorCount": 2,
	        "firstRowColor": "green",
	        "firstRowReplacementHeadsCount": 3,
	        "secondRowColor": "pink",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
	    },
	   	{
	        "key": 2,
	        "colorCount": 1,
	        "firstRowColor": "pink",
	        "firstRowReplacementHeadsCount": 1,
	        "secondRowColor": "",
	        "secondRowReplacementHeadsCount": 0,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
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
		"brush_color": "pink",
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
		"name": "Luke",
		"brush_color": "blue",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 9,
		"name": "Leia",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	}
];

test('getRefillCardsData test 3 (3b, 3g, 2p)', () => {
  expect(getRefillCardsData(test3)).toEqual([ 
   		{
	        "key": 0,
	        "colorCount": 2,
	        "firstRowColor": "blue",
	        "firstRowReplacementHeadsCount": 3,
	        "secondRowColor": "pink",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
	    },
	    {
	        "key": 1,
	        "colorCount": 2,
	        "firstRowColor": "green",
	        "firstRowReplacementHeadsCount": 3,
	        "secondRowColor": "pink",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
	    },
    ]);
});

let test4 = [
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
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	}
];

test('getRefillCardsData test 4 (1b, 1g, 1p)', () => {
  expect(getRefillCardsData(test4)).toEqual([ 
   		{
	        "key": 0,
	        "colorCount": 3,
	        "firstRowColor": "blue",
	        "firstRowReplacementHeadsCount": 1,
	        "secondRowColor": "pink",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "green",
	        "thirdRowReplacementHeadsCount": 1
	    }
    ]);
});


let test5 = [
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
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	},
	{
		"id": 5,
		"name": "Luke",
		"brush_color": "green",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	}
];

test('getRefillCardsData test 5 (1b, 2g, 1p)', () => {
  expect(getRefillCardsData(test5)).toEqual([ 
   		{
	        "key": 0,
	        "colorCount": 3,
	        "firstRowColor": "green",
	        "firstRowReplacementHeadsCount": 2,
	        "secondRowColor": "pink",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "blue",
	        "thirdRowReplacementHeadsCount": 1
	    }
    ]);
});

let test6 = [
	{
		"id": 2,
		"name": "Anakin",
		"brush_color": "pink",
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
		"brush_color": "pink",
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
		"name": "Luke",
		"brush_color": "blue",
		"primary_insured_id": 2,
		"contract_effective_date": ""
	}
];

test('getRefillCardsData test 6 (2b, 2g, 3p)', () => {
  expect(getRefillCardsData(test6)).toEqual([ 
   		{
	        "key": 0,
	        "colorCount": 2,
	        "firstRowColor": "pink",
	        "firstRowReplacementHeadsCount": 3,
	        "secondRowColor": "green",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
	    },
	    {
	        "key": 1,
	        "colorCount": 2,
	        "firstRowColor": "blue",
	        "firstRowReplacementHeadsCount": 2,
	        "secondRowColor": "green",
	        "secondRowReplacementHeadsCount": 1,
	        "thirdRowColor": "",
	        "thirdRowReplacementHeadsCount": 0
	    },
    ]);
});