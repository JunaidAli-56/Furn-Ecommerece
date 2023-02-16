import React from 'react'
// import Button from '@mui/material/Button';
import Form from '../../.././components/Form'
import HeroSec from '../../../components/HeroSec/HeroSec'

export default function Contact() {
    return (
        <>
            <HeroSec pageName={"Contact us"} />
            <div className="container-fluid container2">
                <div className="row">
                    <div className="col-2 mycol1 py-5"></div>
                    <div className="col-10 mycol2"></div>
                </div>
            </div>

            {/* Map Container.. */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13617.505295814151!2d73.07561025!3d31.431305199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1674664836649!5m2!1sen!2s" width="100%" height="500" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            {/* form container */}
            <div className="container mx-5 p-0 form-main-container">
                <h2>Get in Touch</h2>
                <div className="row p-0">
                    <div className="col-9 m-0 p-0">
                        <Form />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 m-0 p-0 map-info-main">
                        <div className="container m-0 p-0">
                            <div className="row py-2">
                                <div className="col py-1">
                                    <div className="card map-info-div">
                                        <i className="bi bi-house"></i>
                                        <div>
                                            <h6>Buttonwood, California</h6>
                                            <p>Rosemead, CA 91770</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-2">
                                    <div className="card map-info-div">
                                        <i className="bi bi-tablet"></i>
                                        <div>
                                            <h6>+1 253 565 2365</h6>
                                            <p>Mon to Fri 9am to 6pm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="card map-info-div">
                                        <i className="bi bi-envelope"></i>
                                        <div>
                                            <h6>support@colorlib.com</h6>
                                            <p>Send us your query anytime!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
