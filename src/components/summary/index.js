import React, { Component } from "react";

//css
import "./styles.css";

class Summary extends Component {
    render() {
        return(
            <div id="summary">
                <div id="summary-title">Summary:</div>
                { this.props.activeType === "starter" ? (
                    <div id="summary-info">
                        <div>Starter Boxes: {this.props.starterBoxesCount}</div>
                        <div>Brushes: {this.props.starterBrushesCount}</div>
                        <div>Replacement Heads: {this.props.starterReplacementHeadsCount}</div>
                    </div>
                ) : (
                    <div id="summary-info">
                        <div>Refill Boxes: {this.props.refillBoxesCount}</div>
                        <div>Replacement Heads: {this.props.refillReplacementHeadsCount}</div>
                    </div>
                )}

            </div>
        );
    }
}

export default Summary;