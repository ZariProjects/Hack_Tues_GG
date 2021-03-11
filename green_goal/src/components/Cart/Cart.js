import React from 'react';
import './Cart.css'

const cart = (props) => {
    let certification = props.isCertified ? <p>GreenGoal Certified</p> : null;
    const imgWidth = 75;
    const imgHeigth = 75;
    return (
        <div className="Cart" onClick={props.clicked}>
            <img src={props.img} alt={props.productName} width={imgWidth} height={imgHeigth} />
            <p>{props.productName}</p>
            <p>{props.sellerName}</p>
            <p>{props.rating}/10</p>
            <p>{props.price}lv</p>
            {certification}
        </div>
    );
};

export default cart;