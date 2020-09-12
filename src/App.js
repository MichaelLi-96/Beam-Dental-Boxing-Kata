import React, { Component } from "react";
import axios from "axios";

//css
import "./App.css";

//components
import Button from "./components/button/index.js";
import Summary from "./components/summary";
import Card from "./components/card";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIsLoading: true,
            family: [],
            unableToFetchData: false,
            activeBoxDisplay: "starter",
            starterBoxesCount: 0,
            starterBrushesCount: 0,
            starterReplacementHeadsCount: 0,
            refillBoxesCount: 0,
            refillReplacementHeadsCount: 0,
        }
    }

    componentDidMount() { 
        this.fetchData();
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.activeBoxDisplay !== this.state.activeBoxDisplay) {
            this.fetchData();
        }
    }

    fetchData = () => {
        axios.get("https://beamtech.github.io/boxing-kata-js/perks.json")
        .then((response) => {
            this.setState({ family: response.data, dataIsLoading: false });
            this.renderSummary();
        })
        .catch((error) => { 
            this.setState({ unableToFetchData: true })
        });
    }

    getSummaryData = (familyData) => {
        const familyMemberCount = familyData.length;

        const starterBoxesCount = Math.ceil(familyMemberCount / 2);
        const starterBrushesCount = familyMemberCount;
        const starterReplacementHeadsCount = familyMemberCount;
        const refillBoxesCount = Math.ceil(familyMemberCount / 4);
        const refillReplacementHeadsCount = familyMemberCount;

        return {
            "starterBoxesCount": starterBoxesCount,
            "starterBrushesCount": starterBrushesCount,
            "starterReplacementHeadsCount": starterReplacementHeadsCount,
            "refillBoxesCount": refillBoxesCount,
            "refillReplacementHeadsCount": refillReplacementHeadsCount
        }
    }

    renderSummary = () => {
       let summaryData = this.getSummaryData(this.state.family);

        this.setState({ 
            starterBoxesCount: summaryData.starterBoxesCount, 
            starterBrushesCount: summaryData.starterBrushesCount, 
            starterReplacementHeadsCount: summaryData.starterReplacementHeadsCount, 
            refillBoxesCount: summaryData.refillBoxesCount, 
            refillReplacementHeadsCount: summaryData.refillReplacementHeadsCount
        });
    }

    getStarterCardsData = (familyData) => {
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
                        "activeType": this.state.activeBoxDisplay,
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
                            "activeType": this.state.activeBoxDisplay,
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
                    "activeType": this.state.activeBoxDisplay,
                    "brushesCount": 1,
                    "replacementHeadsCount": 1
                }
            );
        }

        return cards;
    }

    renderStarterCards = () => {
        let cards = [];
        let starterCardsData = this.getStarterCardsData(this.state.family);
        for(let card of starterCardsData) {
            cards.push(
                <Card
                    key={card.key}
                    colorOne={card.colorOne}
                    colorTwo={card.colorTwo}
                    activeType={card.activeType}
                    brushesCount={card.brushesCount}
                    replacementHeadsCount={card.replacementHeadsCount}
                />
            );
        }
        return cards;
    }

    getRefillCardsData = (familyData) => {
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
                        "activeType": this.state.activeBoxDisplay,
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
                            "activeType": this.state.activeBoxDisplay,
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
                        "activeType": this.state.activeBoxDisplay,
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
                            "activeType": this.state.activeBoxDisplay,
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
                            "activeType": this.state.activeBoxDisplay,
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

    renderRefillCards = () => {
        let cards = [];
        let refillCardsData = this.getRefillCardsData(this.state.family);
        for(let card of refillCardsData) {
            cards.push(
                <Card
                    key= {card.key}
                    activeType= {card.activeType}
                    colorCount= {card.colorCount}
                    firstRowColor= {card.firstRowColor}
                    firstRowReplacementHeadsCount= {card.firstRowReplacementHeadsCount}
                    secondRowColor= {card.secondRowColor}
                    secondRowReplacementHeadsCount= {card.secondRowReplacementHeadsCount}
                    thirdRowColor= {card.thirdRowColor}
                    thirdRowReplacementHeadsCount= {card.thirdRowReplacementHeadsCount}
                />
            );
        }
        return cards;
    }

    render() {
        return(
            <div id="app">
                <div id="app-title">Shipping</div>
                <div id="app-button-container">
                    <Button 
                        title="Starter Boxes" 
                        type="starter" 
                        activeType={this.state.activeBoxDisplay} 
                        onClick={() => this.setState({ activeBoxDisplay: "starter", dataIsLoading: true, unableToFetchData: false })} 
                    />
                    <Button 
                        title="Refill Boxes" 
                        type="refill" 
                        activeType={this.state.activeBoxDisplay} 
                        onClick={() => this.setState({ activeBoxDisplay: "refill", dataIsLoading: true, unableToFetchData: false })}
                    />
                </div>
                 { this.state.dataIsLoading ? (
                    <div id="app-loader-container">
                        {!this.state.unableToFetchData ? (
                            <div id="app-loader"></div>
                        ) : (
                            <div id="app-error-message">Error: Could not receive family preferences</div>
                        )}
                    </div>
                ) : (
                    <div id="app-box-info-container">
                        <Summary 
                            activeType={this.state.activeBoxDisplay} 
                            starterBoxesCount={this.state.starterBoxesCount}
                            starterBrushesCount={this.state.starterBrushesCount}
                            starterReplacementHeadsCount={this.state.starterReplacementHeadsCount}
                            refillBoxesCount={this.state.refillBoxesCount}
                            refillReplacementHeadsCount={this.state.refillReplacementHeadsCount}
                        />
                        <div id="app-card-container">
                            { this.state.activeBoxDisplay === "starter" ? (
                                this.renderStarterCards()
                            ) : (
                                this.renderRefillCards()
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
