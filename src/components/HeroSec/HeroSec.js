import React from "react";
import { Link } from "react-router-dom";

export default function HeroSec(props) {

    return (
        <>
            <div className="container-fluid mycontainer">
                <div className="row">
                    <div className="col img-col m-0 p-0 about-img-col">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/hero/h1_hero.png.webp" alt="" />
                        <div className="container-fluid main-card ">
                            <div className="row">
                                <div className="col-4 about-card-col px-4">
                                    <h1>{props.pageName}</h1>
                                    <h5><Link to="/" >Home</Link> {'>'} {props.pageName}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
