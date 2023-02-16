import React from 'react'
import Button from '@mui/material/Button';
import HeroSec from '../../../components/HeroSec/HeroSec';

export default function About() {
    return (
        <>
            <HeroSec pageName={"About"} />
            <div className="container-fluid container2">
                <div className="row">
                    <div className="col-2 mycol1 py-5"></div>
                    <div className="col-10 mycol2"></div>
                </div>
            </div>
            {/* 3rd container */}
            <div className="container">
                <div className="row py-5">
                    <div className="col text-center heading-col">
                        <h1 className='fw-bold'>OUR STORY</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/about1.png.webp" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>

            {/* 4th Container */}
            <div className="container">
                <div className="row py-5">
                    <div className="col text-center heading-col">
                        <h1 className='fw-bold'>JOURNEY START FROM</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/about2.png.webp" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
            {/*6th container */}
            <div className="container-fluid py-5 m-0">
                <div className="row py-5">
                    <div className="col text-center heading-col">
                        <h1 className='fw-bold'>2020</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 about-col px-5">
                        <div className='fw-bold fs-1'>
                            <i className="bi bi-instagram"></i>
                        </div>
                        <h2 className='fw-bold py-2'>GET INSPIRED WITH INSTAGRAM</h2>
                        <p className='py-2'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <Button className='discover-btn' variant='contained'>Discover More</Button>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 p-0 m-0">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/instra1.png.webp" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 p-0 m-0">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/instra2.png.webp" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>

            {/* 8th container */}
            <div className="container-fluid six-container py-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card sixcon-card">
                            <div className='icon-div'>
                                <i className="bi bi-truck"></i>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Fast & Free Delivery</h5>
                                <p className="card-text">Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card sixcon-card">
                            <div className='icon-div'>
                                <i className="bi bi-credit-card-2-back"></i>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Secure Payment</h5>
                                <p className="card-text">Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card sixcon-card">
                            <div className='icon-div'>
                                <i className="bi bi-cash-coin"></i>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Money Back Guarantee</h5>
                                <p className="card-text">Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card sixcon-card">
                            <div className='icon-div'>
                                <i className="bi bi-motherboard"></i>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">Online Support</h5>
                                <p className="card-text">Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
