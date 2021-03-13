import React from 'react';
import './Card.css'

const card = (props) => {
    let certification = props.isCertified ? <p className = "hr_text"> GreenGoal Certified</p> : null;
    return (
        <div className = "Border" onClick={props.clicked}>
            <img src={props.img} alt={props.productName} className = "Img" />
            <div className = "Text">
                <p className = "hr_text">{props.productName}</p>
                <p className = "hr_text">{props.sellerName}</p>
                <p className = "hr_text">{props.rating}</p>
                <p className = "hr_text">{props.price}lv</p>
                {certification}      
            </div>      
        </div>
    );
};

export default card;