import React, { Component } from "react";

//css
import "./styles.css";

class Card extends Component {
    getStarterCardColor = () => {
        const { 
            colorOne,
            colorTwo
        } = this.props;

        if(colorTwo === "") {
            if(colorOne === "blue") {
                return "card-blue";
            }
            else if(colorOne === "green") {
                return "card-green";
            }
            else if(colorOne === "pink"){
                return "card-pink";
            }
        }
        else {
            if(colorOne === "blue" && colorTwo === "green") {
                return "card-blueGreen";
            }
            else if(colorOne === "blue" && colorTwo === "pink") {
                return "card-bluePink";
            }
            else if(colorOne === "green" && colorTwo === "pink"){
                return "card-greenPink";
            }
        }
    }

    render() {
        const { 
            brushesCount, 
            replacementHeadsCount, 
            firstRowColor, 
            secondRowColor, 
            thirdRowColor, 
            firstRowReplacementHeadsCount, 
            secondRowReplacementHeadsCount, 
            thirdRowReplacementHeadsCount 
        } = this.props;

        return(
            <div>
                {this.props.activeType === "starter" ? (
                    <div className="card">
                         <div className="card-row">
                            <div className={this.getStarterCardColor()}></div>
                            <div>{brushesCount} brushes</div>
                        </div>

                        <div className="card-row">
                            <div className={this.getStarterCardColor()}></div>
                            <div>{replacementHeadsCount} replacement head{replacementHeadsCount !== 1 && "s"}</div>
                        </div>
                    </div>
                ) : (
                    this.props.colorCount === 1 ? (
                        <div className="card">
                             <div className="card-row">
                                <div className={`card-${firstRowColor}`}></div>
                                <div>{firstRowReplacementHeadsCount} replacement head{firstRowReplacementHeadsCount !== 1 && "s"}</div>
                            </div>
                        </div>
                    ) : this.props.colorCount === 2 ? (
                        <div className="card">
                             <div className="card-row">
                                <div className={`card-${firstRowColor}`}></div>
                                <div>{firstRowReplacementHeadsCount} replacement head{firstRowReplacementHeadsCount !== 1 && "s"}</div>
                            </div>

                            <div className="card-row">
                                <div className={`card-${secondRowColor}`}></div>
                                <div>{secondRowReplacementHeadsCount} replacement head{secondRowReplacementHeadsCount !== 1 && "s"}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="card">
                             <div className="card-row">
                                <div className={`card-${firstRowColor}`}></div>
                                <div>{firstRowReplacementHeadsCount} replacement head{firstRowReplacementHeadsCount !== 1 && "s"}</div>
                            </div>

                            <div className="card-row">
                                <div className={`card-${secondRowColor}`}></div>
                                <div>{secondRowReplacementHeadsCount} replacement head{secondRowReplacementHeadsCount !== 1 && "s"}</div>
                            </div>

                            <div className="card-row">
                                <div className={`card-${thirdRowColor}`}></div>
                                <div>{thirdRowReplacementHeadsCount} replacement head{thirdRowReplacementHeadsCount !== 1 && "s"}</div>
                            </div>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default Card;