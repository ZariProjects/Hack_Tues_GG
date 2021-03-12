import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import './NavigationBar.css'

class Navbar extends Component {
    render() {
        return(
            <nav className = "NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
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
            </nav>
        )
    }
}

export default Navbar;
// За фронтендърите, шефа от който гледах как се прави навбара използваше някакви фонтове, формати и тн. от нета и просто ще ви оставя линк към клипчето: https://www.youtube.com/watch?v=fL8cFqhTHwA&ab_channel=BrianDesign  
// Към средата на клипчето са 