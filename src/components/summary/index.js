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
                        <div>Starter Boxes: 3</div>
                        <div>Brushes: 5</div>
                        <div>Replacement Heads: 5</div>
                    </div>
                ) : (
                    <div id="summary-info">
                        <div>Refill Boxes: 2</div>
                        <div>Replacement Heads: 5</div>
                    </div>
                )}

            </div>
        );
    }
}

export default Summary;