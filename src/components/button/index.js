import React, { Component } from "react";

//css
import "./styles.css";

class Button extends Component {
    
    getButton = () => {
        if(this.props.type === this.props.activeType) {
            return "button-active";
        }
        else {
            return "button-unactive";
        } 
    }

    render() {
        console.log(this.props.type + " " + this.props.activeType);
        return(
            <div className={this.getButton()} onClick={this.props.onClick}>
                <div className="button-title">{this.props.title}</div>
            </div>
        );
    }
}

export default Button;