import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import { Button } from '../Button/Button';
import './NavigationBar.css';

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className = "NavbarItems">
                <h1>GreenGoal</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key = {index}>
                                <a className={item.cName} href={item.url}>
                                {item.title} 
                                </a>
                            </li>
                            //cName e линка за съответния компонент, който е част от масива в MenuItems.js
                            //url е съответният линк за стряницата, която искаме да отворим, но понеже няма да работим с ликнове, защото всичко е свързано, с Лъчо ще разучим как се свързват страниците  
                        )
                    })} 
                </ul>
                <Button>Sign Up</Button>
                <Button>Sign In</Button>
            </nav>
        )
    }
}

export default Navbar;
// За фронтендърите, шефа от който гледах как се прави навбара използваше някакви фонтове, формати и тн. от нета и просто ще ви оставя линк към клипчето: https://www.youtube.com/watch?v=fL8cFqhTHwA&ab_channel=BrianDesign  
// Към средата на клипчето са 