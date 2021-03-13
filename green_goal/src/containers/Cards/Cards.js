import React, { Component } from 'react';
import Card from '../../components/Cart/Card';
//import img from './SampleImgDeleteLater.png';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Cards extends Component {
    


    componentDidMount () {
        this.props.onCardInit()
    }
    getStars(num){
        let Star = []
        for(let i = 1; i < num; i++){
            Star.push(i); 
        }

        return Star;
    }

    
    render () {
        let cardsForU = (<h1>Loading...</h1>);

        if (this.props.cards) {
            const cardsForUArray = Object.values(this.props.cards);
            cardsForU = cardsForUArray.map(card => (
                        <Card
                        key={Math.random() * 1000000} 
                        clicked={this.onClickHandler}
                        img={card.img}
                        productName={card.productName}
                        sellerName={card.sellerName}
                        rating={
                            this.getStars(card.rating).map(star => (
                                <span className="star"><i class="fa fa-star"></i></span>
                            ) )
                        }
                        price={card.priceOne} 
                        isCertified={card.isCertified}
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
        cards: state.card.cards,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
   return {
       onCardInit: () => dispatch(actions.initCards())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);