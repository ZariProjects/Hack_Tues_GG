import React, { Component } from 'react';
import "./Achievements.css";

class Achievements extends Component {
    render() {
        return (
            <div className="Achievements">
                <h1>Achievements</h1>
                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fa fa-tree"></i>
                            <div className="details">
                                <span className="title">Achievement 1</span>
                                <span>1st Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment.</p>
                            <div className="bottom">
                            <button>Achive</button>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fa fa-leaf"></i>
                            <div className="details">
                                <span className="title">Achievement 2</span>
                                <span>2nd Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment.</p>
                            <div className="bottom">
                                <button>Achive</button>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fa fa-cloud"></i>
                            <div className="details">
                                <span className="title">Achievement 3</span>
                                <span>3rd Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment.</p>
                            <div className="bottom">
                                <button>Achive</button>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-globe"></i>
                            <div className="details">
                                <span className="title">Achievement 4</span>
                                <span>4th Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment. .</p>
                            <div className="bottom">
                                <button>Achive</button>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fa fa-tint"></i>
                            <div className="details">
                                <span className="title">Achievement 5</span>
                                <span>5th Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment. .</p>
                            <div className="bottom">
                                <button>Achive</button>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fa fa-star"></i>
                            <div className="details">
                                <span className="title">Achievement 6</span>
                                <span>6th Jan 2021</span>
                            </div>
                            <p>Planting a tree is a lifelong investment. .</p>
                            <div className="bottom">
                                <button>Achive</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
};

export default Achievements;