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
            activeBoxDisplay: "starter"
        }
    }

    componentDidMount() { 
        axios.get("https://beamtech.github.io/boxing-kata-js/perks.json")
        .then((response) => {
            this.setState({ data: response.data, dataIsLoading: false });
            console.log(this.state.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return(
            <div id="app">
                <div id="app-title">Shipping</div>
                <div id="app-button-container">
                    <Button title="Starter Boxes" type="starter" activeType={this.state.activeBoxDisplay} onClick={() => this.setState({ activeBoxDisplay: "starter" })} />
                    <Button title="Refill Boxes" type="refill" activeType={this.state.activeBoxDisplay} onClick={() => this.setState({ activeBoxDisplay: "refill" })}/>
                </div>
                <Summary activeType={this.state.activeBoxDisplay} />
                <div id="app-card-container">
                    <Card color="blue" brushes="2" replacementHeads="2" />
                    <Card color="green" brushes="2" replacementHeads="2" />
                    <Card color="pink" brushes="2" replacementHeads="2" />
                    <Card color="blue" brushes="2" replacementHeads="2" />
                </div>
            </div>
        );
    }
}

export default App;