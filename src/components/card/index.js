import React, { Component } from "react";

//css
import "./styles.css";

class Card extends Component {
    getCardColor = () => {
        if(this.props.color === "blue") {
            return "card-blue";
        }
        else if(this.props.color === "green"){
             return "card-green";
        }
        else {
            return "card-pink";
        }
    }
    render() {
        return(
            <div className="card">
                <div className="card-row">
                    <div className={this.getCardColor()}></div>
                    <div>{this.props.brushes} brushes</div>
                </div>

                <div className="card-row">
                    <div className={this.getCardColor()}></div>
                    <div>{this.props.replacementHeads} replacement heads</div>
                </div>
            </div>
        );
    }
}

export default Card;