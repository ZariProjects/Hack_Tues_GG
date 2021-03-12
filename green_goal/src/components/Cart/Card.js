import React from 'react';
import './Card.css'

const card = (props) => {
    let certification = props.isCertified ? <p>GreenGoal Certified</p> : null;
    const imgWidth = 75;
    const imgHeigth = 75;
    return (
        <div className="Card" onClick={props.clicked}>
            <div className="Img">
            <   img src={props.img} alt={props.productName} width={imgWidth} height={imgHeigth} />
            </div>
            <div className="Text">
                <p>{props.productName}</p>
                <p>{props.sellerName}</p>
                <p>{props.rating}/10</p>
                <p>{props.price}lv</p>
                {certification}
            </div>
            
        </div>
    );
};

export default card;