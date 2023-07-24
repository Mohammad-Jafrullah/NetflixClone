import React from 'react'
import './Step1.css';
import { Link } from 'react-router-dom';

export default function Step1() {
    return (
        <>
            <div className="step1-body">
                <div className="navbar">
                    <h1>NETFLIX</h1>
                    <a href="/login" className='cursor underline'>Sign In</a>
                </div>
                <div className='step1-front-page'>
                    <div className="step1-box">
                        <div className='step1-icons'><i className="fa-solid fa-laptop step1-laptop fa-bounce"></i><i className="fa-solid fa-display step1-deskstop fa-bounce"></i><i className="fa-solid fa-tablet-screen-button step1-tablet fa-bounce"></i><i className="fa-solid fa-mobile-screen-button step1-mobile fa-bounce"></i></div>
                        <p className='p1 black'>STEP <b className='black'>1</b> OF <b className='black'>3</b></p>
                        <h4 className='black'>Finish setting up your account</h4>
                        <p className='p2 black'>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
                        <button className='cursor'><Link to="/step2">Next</Link></button>
                    </div>
                </div>
                <div className="step1-footer">
                    <p className='grey'>Questions? <a className='grey underline' href="/">Call 000-800-919-1694</a></p>
                    <div className="step1-option">
                        <div className="option1">
                            <ul>
                                <li><a className='underline grey' href="/">FAQ</a></li>
                                <li><a className='underline grey' href="/">Privacy</a></li>
                            </ul>
                            <ul>
                                <li><a className='underline grey' href="/">Help Centre</a></li>
                                <li><a className='underline grey' href="/">Cookie Preferences</a></li>
                            </ul>
                        </div>
                        <div className="option2">
                            <ul>
                                <li><a className='underline grey' href="/">Netflix Shop</a></li>
                                <li><a className='underline grey' href="/">Corporate Information</a></li>
                            </ul>
                            <ul>
                                <li><a className='underline grey' href="/">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-globe"></i><select className='cursor' name="language"><option value="english" className='grey'>English</option><option value="hindi" className='grey'>Hindi</option></select></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
