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

export default function Login() {
    return (
        <>

            <div className="container-fluid mycontainer">
                <div className="row">
                    <div className="col login-img  m-0 p-0">
                        <div className="container bg-white login-card">
                            <div className="row py-4">
                                <div className="col login-col px-5">
                                    <h1 className="text-center">Login</h1>
                                    <p className="text-center">Enter Login details to get access</p>
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
                                                <div className="col-12 py-2 ">
                                                    <TextField
                                                        id="outlined-email-input"
                                                        label="Email"
                                                        type="text"
                                                        autoComplete="current-password"
                                                    />
                                                </div>
                                                <div className="col py-2">
                                                    <TextField
                                                        id="outlined-password-input"
                                                        label="Password"
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
                                        <div className="col checkbox-col">
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Keep Me Logged In" />
                                            </FormGroup>
                                            <a href="">Forget Password?</a>
                                        </div>
                                        <div className="col-12 checkbox-col py-4">
                                            <p>Don`t have an account <br />
                                                <Link to='/auth/register'> Sign Up </Link>here</p>
                                            <Button variant="outlined" size="large" className='big-btn'>
                                                Login
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
