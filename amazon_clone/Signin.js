import React from "react";
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Signin.css';

const Signin = () => {
    return (
        <div className="container">
            <div className="bg-gray-100">
                <form className="form-container">
                    <div className="form-content">
                        <h2 className="title">Sign in</h2>
                        <div className="input-group">
                            <div className="input-field">
                                <p className="label">Email or mobile phone number</p>
                                <input className="input" type="email" name="email" />
                            </div>
                            <div className="input-field">
                                <p className="label">Password</p>
                                <input className="input" type="password" name="password" />
                            </div>
                            <Link className="w-full" to="/Home">
                                <button className="button">
                                    Continue
                                </button>
                            </Link>
                        </div>
                        <p className="text-sm mt-4"> By Continuing, you agree to Amazon's <span className="link">Conditions of use</span> and <span className="link">Privacy Notice.</span></p>
                        <p className="flex items-center mt-4 cursor-pointer group">
                            <ArrowRightIcon />
                            <span className="link">Need help?</span>
                        </p>
                    </div>
                    <p className="divider">
                        <span className="divider-line"></span>
                        <span className="divider-text"> New to Amazon?</span>
                        <span className="divider-line"></span>
                    </p>
                    <Link className="w-full" to="/registration">
                        <button className="button">
                            Create your Amazon Account
                        </button>
                    </Link>
                </form>
            </div>
            <div className="footer">
                <div className="footer-links">
                    <p className='footer-link'>
                        Conditions of Use
                    </p>
                    <p className='footer-link'>
                        Privacy Notice
                    </p>
                    <p className='footer-link'>
                        Help
                    </p>
                </div>
                <p className="footer-text"> @ 1996-2023, ReactBd.com, Inc. or its affiliates </p>
            </div>
        </div>
    );
};

export default Signin;
