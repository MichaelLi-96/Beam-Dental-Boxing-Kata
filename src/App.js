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
            data: [],
            unableToFetchData: false,
            activeBoxDisplay: "starter"
        }
    }

    componentDidMount() { 
        this.fetchData();
    }

    componentDidUpdate() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get("https://beamtech.github.io/boxing-kata-js/perks.json")
        .then((response) => {
            setTimeout(() => this.setState({ data: response.data, dataIsLoading: false }) , 1000);
            console.log(this.state.data);
        })
        .catch((error) => { 
            this.setState({ unableToFetchData: true })
        });
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
                        <Summary activeType={this.state.activeBoxDisplay} />
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