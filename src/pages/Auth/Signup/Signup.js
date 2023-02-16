import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import wave from '../../../image/wave.png'
import { Link } from "react-router-dom";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Signup() {
    return (
        <>

            <div className="container-fluid mycontainer">
                <div className="row">
                    <div className="col login-img  m-0 p-0">
                        <div className="container bg-white login-card">
                            <div className="row py-4">
                                <div className="col login-col px-5">
                                    <h1 className="text-center">Sign up</h1>
                                    <p className="text-center">Create your account to get full access</p>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div className="container  from-con">
                                            <div className="row m-0">
                                                <div className="col-12 py-1 ">
                                                    <TextField
                                                        id="outlined-text-input"
                                                        label="First name"
                                                        type="text"
                                                        autoComplete="current-password"
                                                    />
                                                </div>
                                                <div className="col-12 py-1 ">
                                                    <TextField
                                                        id="outlined-text-input"
                                                        label="Last name"
                                                        type="text"
                                                        autoComplete="current-password"
                                                    />
                                                </div>
                                                <div className="col-12 py-1 ">
                                                    <TextField
                                                        id="outlined-email-input"
                                                        label="Email"
                                                        type="text"
                                                        autoComplete="current-password"
                                                    />
                                                </div>
                                                <div className="col-12 py-1">
                                                    <TextField
                                                        id="outlined-password-input"
                                                        label="Password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                    />
                                                </div>
                                                <div className="col py-1">
                                                    <TextField
                                                        id="outlined-password-input"
                                                        label="Confirm Password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </Box>

                                    <div className="row checkbox-div">
                                        <div className="col-12 checkbox-col py-4">
                                            <p>Already have an account?<br />
                                                <Link to='/auth/login'>Login</Link> here</p>
                                            <Button variant="outlined" size="large" className='big-btn'>
                                                Sign up
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
