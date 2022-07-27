import React from "react";
import '../css/Card.css';
class Card extends React.Component {
    render() {
        return(
        <div className="Github-profile">
            <img src="https://via.placeholder.com/75"/>
            <div className="Info">
                <div className="Name">Testing name</div>
                <div className="Company">Tesing company</div>
            </div>
        </div>
        );
    }
}

export default Card;