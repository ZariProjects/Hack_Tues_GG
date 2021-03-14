import react, { Component } from 'react';
import "./Cart.css";

class Cart extends Component {
    
    render() {
        return (
            <div>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                        <div class="cart-row">
                            <span class="cart-item cart-header cart-column"> ITEM </span>
                            <span class="cart-price cart-header cart-column"> PRICE </span>
                            <span class="cart-quantity cart-header cart-column"> QUANTITY </span>
                        </div>
                        <div class="cart-items">
                        </div>
                        <div class="cart-total">
                            <strong class="cart-total-title">Total :</strong>
                            <span class="cart-total-price">$0</span>
                        </div>
                        <button onclick="window.location.href='ID.html';" class="btn btn-primary btn-purchase" role="button">PURCHASE</button>
    
                </section>
            </div>
        );
    }
}

export default Cart;