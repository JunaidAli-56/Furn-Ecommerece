import React from 'react'
import Button from '@mui/material/Button';
import Tab from '../../.././components/Tab'
import Images from '../../../image';

export default function Home() {
    return (
        <>
            <div className="container-fluid mycontainer">
                <div className="row">
                    <div className="col img-col m-0 p-0">
                        <img src={Images.main} alt="" />
                        {/* <div className="container-fluid main-card ">
                            <div className="row">
                                <div className="col-4 card-col">
                                    <div className="card">
                                        <h5>70% SALE FOR</h5>
                                        <h1>FURNITURE AT COST</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ipsa deserunt hic dicta autem harum iusto, repellendus tenetur distinctio atque consequuntur error possimus dolore vero.</p>
                                        <button className='btn btn mybtn'>DISCOVER MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid container2">
                <div className="row">
                    <div className="col-2 mycol1"></div>
                    <div className="col-10 mycol2"></div>
                </div>
            </div>
            {/* 3rd container */}
            <div className="container">
                <div className="row py-5">
                    <div className="col text-center">
                        <h2 className='fw-bold'>POPULAR PRODUCTS</h2>
                        <p className='fs-4'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Tab />
                    </div>
                </div>
            </div>
            {/* 4th container */}
            <div className="container-fluid fourth-container p-0 m-0">
                <div className="row m-0 p-0">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/visit_bg.png.webp" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 about-col p-4">
                        <h2 className='fw-bold py-2'>BEST FURNITURE
                            MANUFACTURER</h2>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <Button className='discover-btn' variant='contained'>Discover More</Button>
                    </div>
                </div>
            </div>
            {/* 5th container */}
            <div className="container py-4">
                <div className="row py-4">
                    <div className="col text-center">
                        <h2 className='fw-bold'>PRODUCTS YOU MAY LIKE</h2>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card border-0 py-3">
                                    <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Bly Microfiber / Microsuede 56"Armless Loveseat</p>
                                        {/* <a href="#" className="btn btn-primary">Shop Now</a> */}
                                        <div className='d-flex justify-content-between float-btn-lowerdiv'>
                                            <Button variant="contained">Shop Now</Button>
                                            <h5>$367</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card border-0 py-3">
                                    <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Bly Microfiber / Microsuede 56"Armless Loveseat</p>
                                        {/* <a href="#" className="btn btn-primary">Shop Now</a> */}
                                        <div className='d-flex justify-content-between float-btn-lowerdiv'>
                                            <Button variant="contained">Shop Now</Button>
                                            <h5>$306</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card border-0 py-3">
                                    <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Bly Microfiber / Microsuede 56"Armless Loveseat</p>
                                        <div className='d-flex justify-content-between float-btn-lowerdiv'>
                                            <Button variant="contained">Shop Now</Button>
                                            <h5>$347</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col text-center">
                        <Button className='p-3' size='large' variant='contained'>DISCOVER MORE</Button>
                    </div>
                </div>
            </div>
            {/*6th container */}
            <div className="container-fluid p-0 m-0">
                <div className="row d-flex justify-content-center align-items-center m-0 p-0">
                    <div className="col-lg-4 col-md-12 col-sm-12 about-col px-5 py-4">
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

            {/* 7th container */}
            <div className="container py-4">
                <div className="row py-4">
                    <div className="col text-center">
                        <h2 className='fw-bold'>TOP PICK</h2>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card border-0 py-3">
                                    <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular9.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Bly Microfiber / Microsuede 56"Armless Loveseat</p>
                                        {/* <a href="#" className="btn btn-primary">Shop Now</a> */}
                                        <div className='d-flex justify-content-between float-btn-lowerdiv'>
                                            <Button variant="contained">Shop Now</Button>
                                            <h5>$367</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card border-0 py-3">
                                    <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular8.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Bly Microfiber / Microsuede 56"Armless Loveseat</p>
                                        {/* <a href="#" className="btn btn-primary">Shop Now</a> */}
                                        <div className='d-flex justify-content-between float-btn-lowerdiv'>
                                            <Button variant="contained">Shop Now</Button>
                                            <h5>$306</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card border-0 py-3">
                                    <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular7.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Bly Microfiber / Microsuede 56"Armless Loveseat</p>
                                        <div className='d-flex justify-content-between float-btn-lowerdiv'>
                                            <Button variant="contained">Shop Now</Button>
                                            <h5>$347</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col text-center">
                        <Button className='p-3' size='large' variant='contained'>DISCOVER MORE</Button>
                    </div>
                </div>
            </div>

            {/* 8th container */}
            <div className="container-fluid six-container py-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card sixcon-card border-0 py-3">
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
                        <div className="card sixcon-card border-0 py-3">
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
                        <div className="card sixcon-card border-0 py-3">
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
                        <div className="card sixcon-card border-0 py-3">
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
