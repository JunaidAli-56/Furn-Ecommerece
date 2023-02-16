import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Sofa" {...a11yProps(0)} />
                    <Tab label="Table" {...a11yProps(1)} />
                    <Tab label="Chair" {...a11yProps(2)} />
                    <Tab label="Bed" {...a11yProps(3)} />
                    <Tab label="Decore  " {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png" className="card-img-top" alt="..." />
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
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png" className="card-img-top" alt="..." />
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
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png" className="card-img-top" alt="..." />
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
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png" className="card-img-top" alt="..." />
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
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png" className="card-img-top" alt="..." />
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
                            <div className="card">
                                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png" className="card-img-top" alt="..." />
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
            </TabPanel>
        </Box>
    );
}