import React, { Component } from 'react';
import Card from '../../components/Cart/Card';
//import img from './SampleImgDeleteLater.png';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Cards extends Component {
    
    onClickHandler() {
        alert('Dont Click My Apples');
    }

    componentDidMount () {
        this.props.onCardInit()
        console.log(this.props.cards);
        
    }
    
    render () {
        let cardsForU = (<h1>Loading...</h1>);
        if (this.props.cards) {
            console.log(this.props.cards)
            const cardsForUArray = Object.values(this.props.cards);
            console.log(cardsForU)
            cardsForU = cardsForUArray.map(card => (
                        <Card
                        key={Math.random() * 1000000} 
                        clicked={this.onClickHandler}
                        img={card.img}
                        productName={card.productName}
                        sellerNsame={card.sellerName}
                        rating={card.rating}
                        price={card.price} 
                            />
                        ));
            
        }
        return (
            <div>
                {cardsForU}
            </div>
            
        );
    }
};

const mapStateToProps = state => {
    return {
        cards: state.card.cards
    };
};

const mapDispatchToProps = dispatch => {
   return {
       onCardInit: () => dispatch(actions.initCards())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);