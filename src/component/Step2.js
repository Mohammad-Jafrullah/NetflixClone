import React from 'react'
import './Step2.css';

export default function step2() {
    return (
        <>
            <div className="step2-body">
                <div className="navbar">
                    <h1>NETFLIX</h1>
                    <a href="/login" className='cursor underline'>Sign In</a>
                </div>
                <div className='step2-front-page'>
                    <div className="step2-box">
                        <p className='p1 black'>STEP <b className='black'>1</b> OF <b className='black'>3</b></p>
                        <h1 className='black'>Create a password to start your membership</h1>
                        <p className="p2 black">Just a few more steps and you're done!We hate paperwork, too.</p>
                        <form action="">
                            <input type="email" placeholder='Email' required/>
                            <input type="password" placeholder='Add a password' required/>
                            <button type='submit'>Next</button>
                        </form>
                    </div>
                </div>
                <div className="step2-footer">
                    <p className='grey'>Questions? <a className='grey underline' href="/">Call 000-800-919-1694</a></p>
                    <div className="step2-option">
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
