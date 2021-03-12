import React, { Component } from 'react';
import Card from '../../components/Cart/Card';
import img from './SampleImgDeleteLater.png';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import axios from 'axios';

class Cards extends Component {
    
    onClickHandler() {
        alert('Dont Click My Apples');
    }

    componentDidMount () {
        
        
    }
    
    render () {
        return (
            <div className="Cards">
                <Card
                clicked={this.onClickHandler}
                isCertified={false}
                productName="Qbylka"
                sellerName="Dqdo Stawri"
                rating={3}
                price={10}
                img={img}/>

                <Card
                clicked={this.onClickHandler}
                isCertified={true}
                productName="Dinq"
                sellerName="Organic Food Corp Vratsa"
                rating={11}
                price={4}
                img={img}/>

                <Card
                clicked={this.onClickHandler}
                isCertified={false}
                productName="Kruha"
                sellerName="Baba Nqdq"
                rating={6.6}
                price={3}
                img={img}/>

<Card
                clicked={this.onClickHandler}
                isCertified={false}
                productName="Kruha"
                sellerName="Baba Nqdq"
                rating={6.6}
                price={3}
                img={img}/>

<Card
                clicked={this.onClickHandler}
                isCertified={false}
                productName="Kruha"
                sellerName="Baba Nqdq"
                rating={6.6}
                price={3}
                img={img}/>

<Card
                clicked={this.onClickHandler}
                isCertified={false}
                productName="Kruha"
                sellerName="Baba Nqdq"
                rating={6.6}
                price={3}
                img={img}/>

            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        cards: state.card.cardData
    };
};

const mapDispatchToProps = dispatch => {
   return {
       //onCardInit: () => dispatch(actions.init_cards())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);