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

    renderSummary = () => {
        const familyMemberCount = this.state.family.length;
        
        const starterBoxesCount = Math.ceil(familyMemberCount / 2);
        const starterBrushesCount = familyMemberCount;
        const starterReplacementHeadsCount = familyMemberCount;
        const refillBoxesCount = Math.ceil(familyMemberCount / 4);
        const refillReplacementHeadsCount = familyMemberCount;

        this.setState({ 
            starterBoxesCount: starterBoxesCount, 
            starterBrushesCount: starterBrushesCount, 
            starterReplacementHeadsCount: starterReplacementHeadsCount, 
            refillBoxesCount: refillBoxesCount, 
            refillReplacementHeadsCount: refillReplacementHeadsCount
        });
    }

    renderCards = () => {
        const colorCount = {
            "blue": 0,
            "green": 0,
            "pink": 0
        };
        for(const familyMember of this.state.family) {
            const brushColor = familyMember.brush_color;
            colorCount[brushColor] = colorCount[brushColor] + 1;
        }
    }

    render() {
        return(
            <div id="app">
                <div id="app-title">Shipping</div>
                <div id="app-button-container">
                    <Button title="Starter Boxes" type="starter" activeType={this.state.activeBoxDisplay} onClick={() => this.setState({ activeBoxDisplay: "starter", dataIsLoading: true, unableToFetchData: false })} />
                    <Button title="Refill Boxes" type="refill" activeType={this.state.activeBoxDisplay} onClick={() => this.setState({ activeBoxDisplay: "refill", dataIsLoading: true, unableToFetchData: false })}/>
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
                            <Card color="blue" brushes="2" replacementHeads="2" />
                            <Card color="green" brushes="2" replacementHeads="2" />
                            <Card color="pink" brushes="2" replacementHeads="2" />
                            <Card color="blue" brushes="2" replacementHeads="2" />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
