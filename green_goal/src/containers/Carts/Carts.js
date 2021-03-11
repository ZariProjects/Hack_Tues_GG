import React, { Component } from 'react';
import Cart from '../../components/Cart/Cart';
import img from './SampleImgDeleteLater.png';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Carts extends Component {
    
    onClickHandler() {
        alert('Dont Click My Apples');
    }
    
    render () {
        return (
            <div>
                <Cart
                clicked={this.onClickHandler}
                isCertified={false}
                productName="Qbylka"
                sellerName="Dqdo Stawri"
                rating={3}
                price={10}
                img={img}/>

                <Cart
                clicked={this.onClickHandler}
                isCertified={true}
                productName="Dinq"
                sellerName="Organic Food Corp Vratsa"
                rating={11}
                price={4}
                img={img}/>

                <Cart
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
        carts: state.cart.cartData
    };
};

const mapDispatchToProps = dispatch => {
   return {
       onCartInit: () => dispatch(actions.init_cards())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);