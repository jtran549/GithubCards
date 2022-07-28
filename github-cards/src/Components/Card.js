import React from "react";
import '../css/Card.css';
class Card extends React.Component {
    render() {
        return(
        <div className="Github-profile">
            <img src="https://via.placeholder.com/75" alt="get bent"/>
            <div className="Info">
                <div className="Name">{this.props.name}</div>
                <div className="Company">{this.props.company}</div>
            </div>
        </div>
        );
    }
}

export default Card;