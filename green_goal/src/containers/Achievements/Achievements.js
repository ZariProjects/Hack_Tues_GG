import React, { Component } from 'react';
import "./Achievements.css";

class Achievements extends Component {
    render() {
        return (
            <div className="Achievements">
                <h1>Achievements</h1>
                <div class="wrapper">
                    <div class="center-line">
                        <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
                    </div>
                    <div class="row row-1">
                        <section>
                            <i class="icon fa fa-tree"></i>
                            <div class="details">
                                <span class="title">Achievement 1</span>
                                <span>1st Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment.</p>
                            <div class="bottom">
                                <a href="#">Achive</a>
                            </div>
                        </section>
                    </div>
                    <div class="row row-2">
                        <section>
                            <i class="icon fa fa-leaf"></i>
                            <div class="details">
                                <span class="title">Achievement 2</span>
                                <span>2nd Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment.</p>
                            <div class="bottom">
                                <a href="#">Achive</a>
                            </div>
                        </section>
                    </div>
                    <div class="row row-1">
                        <section>
                            <i class="icon fa fa-cloud"></i>
                            <div class="details">
                                <span class="title">Achievement 3</span>
                                <span>3rd Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment.</p>
                            <div class="bottom">
                                <a href="#">Achive</a>
                            </div>
                        </section>
                    </div>
                    <div class="row row-2">
                        <section>
                            <i class="icon fas fa-globe"></i>
                            <div class="details">
                                <span class="title">Achievement 4</span>
                                <span>4th Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment. .</p>
                            <div class="bottom">
                                <a href="#">Achive</a>
                            </div>
                        </section>
                    </div>
                    <div class="row row-1">
                        <section>
                            <i class="icon fa fa-tint"></i>
                            <div class="details">
                                <span class="title">Achievement 5</span>
                                <span>5th Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment. .</p>
                            <div class="bottom">
                                <a href="#">Achive</a>
                            </div>
                        </section>
                    </div>
                    <div class="row row-2">
                        <section>
                            <i class="icon fa fa-star"></i>
                            <div class="details">
                                <span class="title">Achievement 6</span>
                                <span>6th Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment. .</p>
                            <div class="bottom">
                                <a href="#">Achive</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
};

export default Achievements;