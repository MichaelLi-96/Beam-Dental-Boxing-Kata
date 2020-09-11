import React, { Component } from "react";

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
            activeBoxDisplay: "starter",
        }
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default App;