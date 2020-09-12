function getRefillCardsData(familyData) {
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

        while(count - 4 >= 0) {
            cards.push(
                {
                    "key": key,
                    "colorCount": 1,
                    "firstRowColor": color,
                    "firstRowReplacementHeadsCount": 4,
                    "secondRowColor": "",
                    "secondRowReplacementHeadsCount": 0,
                    "thirdRowColor": "",
                    "thirdRowReplacementHeadsCount": 0
                }
            );
            key = key + 1;
            count = count - 4;
        }

        if(count > 0) {
            remainderColors.push({
                color: color,
                count: count
            })
        }
    }

    remainderColors.sort(function(a, b){
        return b.count - a.count;
    });

    while(remainderColors.length > 0) {
        let boxSpaceLeft = 4;

        let biggestColor = remainderColors[0];
        let firstRowColor = biggestColor.color;
        let firstRowReplacementHeads = biggestColor.count;

        boxSpaceLeft = 4 - firstRowReplacementHeads;
        remainderColors.splice(0, 1);

        let matchFound = false;
        for(let i = 0; i < remainderColors.length - 1; i++) {
            if(boxSpaceLeft === remainderColors[i].count) {
                matchFound = true;
                let secondRowColor = remainderColors[i].color;
                let secondRowReplacementHeads = remainderColors[i].count;
                cards.push(
                    {
                        "key": key,
                        "colorCount": 2,
                        "firstRowColor": firstRowColor,
                        "firstRowReplacementHeadsCount": firstRowReplacementHeads,
                        "secondRowColor": secondRowColor,
                        "secondRowReplacementHeadsCount": secondRowReplacementHeads,
                        "thirdRowColor": "",
                        "thirdRowReplacementHeadsCount": 0
                    }
                );
                key = key + 1;
                remainderColors.splice(i, 1);
                break;
            }
        }

        if(matchFound) {
            continue;
        }

        if(remainderColors.length === 0) {
            cards.push(
                {
                    "key": key,
                    "colorCount": 1,
                    "firstRowColor": firstRowColor,
                    "firstRowReplacementHeadsCount": firstRowReplacementHeads,
                    "secondRowColor": "",
                    "secondRowReplacementHeadsCount": 0,
                    "thirdRowColor": "",
                    "thirdRowReplacementHeadsCount": 0
                }
            );
            key = key + 1;
        }
        else {
            // only job is to fill up the card starting from the minimum count color
            let rows = [];
            let length = remainderColors.length - 1;
            for(let i = length; i >= 0; i--) {
                if(boxSpaceLeft === 0) {
                    break;
                }
                let remainderColor = remainderColors[i];
                if(remainderColor.count - boxSpaceLeft > 0) {
                    remainderColor.count = remainderColor.count - boxSpaceLeft;
                    rows.push({
                        "color": remainderColor.color,
                        "count": boxSpaceLeft
                    })
                    boxSpaceLeft = 0;
                }
                else {
                    rows.push({
                        "color": remainderColor.color,
                        "count": remainderColor.count
                    })
                    boxSpaceLeft = boxSpaceLeft - remainderColor.count;
                    remainderColors.splice(i, 1);
                }
            }

            if(rows.length === 1) {
                let secondRow = rows[0];
                let secondRowColor = secondRow.color;
                let secondRowReplacementHeads = secondRow.count;
                cards.push(
                    {
                        "key": key,
                        "colorCount": 2,
                        "firstRowColor": firstRowColor,
                        "firstRowReplacementHeadsCount": firstRowReplacementHeads,
                        "secondRowColor": secondRowColor,
                        "secondRowReplacementHeadsCount": secondRowReplacementHeads,
                        "thirdRowColor": "",
                        "thirdRowReplacementHeadsCount": 0
                    }
                );
                key = key + 1;
            }
            else if(rows.length === 2){
                let secondRow = rows[0];
                let secondRowColor = secondRow.color;
                let secondRowReplacementHeads = secondRow.count;
                let thirdRow = rows[1];
                let thirdRowColor = thirdRow.color;
                let thirdRowReplacementHeads = thirdRow.count;
                cards.push(
                    {
                        "key": key,
                        "colorCount": 3,
                        "firstRowColor": firstRowColor,
                        "firstRowReplacementHeadsCount": firstRowReplacementHeads,
                        "secondRowColor": secondRowColor,
                        "secondRowReplacementHeadsCount": secondRowReplacementHeads,
                        "thirdRowColor": thirdRowColor,
                        "thirdRowReplacementHeadsCount": thirdRowReplacementHeads
                    }
                );
                key = key + 1;
            }
        }
    }

    return cards;
}

module.exports = getRefillCardsData;