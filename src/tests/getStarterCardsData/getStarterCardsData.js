function getStarterCardsData(familyData) {
    const colorCount = {
        "blue": 0,
        "green": 0,
        "pink": 0
    };
    for(let familyMember of familyData) {
        let brushColor = familyMember.brush_color;
        colorCount[brushColor] = colorCount[brushColor] + 1;
    }

    const cards = [];
    let key = 0;
    let remainderColors = [];

    for(let color in colorCount) {
        let count = colorCount[color];


        while(count - 2 >= 0) {
            cards.push(
                {
                    "key": key,
                    "colorOne": color,
                    "colorTwo": "",
                    "brushesCount": 2,
                    "replacementHeadsCount": 2
                }
            );
            key = key + 1;
            count = count - 2;
        }

        if(count === 1) {
            remainderColors.push(color);
            if(remainderColors.length === 2) {
                cards.push(
                    {
                        "key": key,
                        "colorOne": remainderColors[0],
                        "colorTwo": remainderColors[1],
                        "brushesCount": 2,
                        "replacementHeadsCount": 2
                    }
                );
                key = key + 1;
                remainderColors = [];
            }
        }
    }

    if(remainderColors.length === 1) {
        cards.push(
           {
                "key": key,
                "colorOne": remainderColors[0],
                "colorTwo": "",
                "brushesCount": 1,
                "replacementHeadsCount": 1
            }
        );
    }

    return cards;
}

module.exports = getStarterCardsData;