import React,{ useState } from 'react'
import './Login.css';
import { MdLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Data from './EmailData';

export default function Login() {

  // **********************************************************************

    const [emailData,setEmailData] = useState("");
    const [passData,setPassData] = useState("");
    const [warning1,setWarning1] = useState("");
    const [warning2,setWarning2] = useState("");
    const [borderDesign1,setBorderDesign1] = useState({});
    const [borderDesign2,setBorderDesign2] = useState({});
    let lenOfElement = Data.length; 


    const GetEmailData = (e) => {
        e.preventDefault();
        let check = 0;
        let passCheck = 0;
        let i;
        for(i=0;i<lenOfElement;i++){
            if(emailData===Data[i].email){
                check = 1;
                break;
            }
        }
        if(check===1){
            setWarning1("Alright.");
        }
        else{
            setBorderDesign1({borderBottom:"3px solid #E8730C"});
            setWarning1("Please enter a valid email address.");
        }

  // **********************************************************************


        // for(let j=0;j<lenOfElement;j++){
        //     if(passData===Data[j].password){
        //         passCheck = 1;
        //         break;
        //     }
        // }
        if(passData===Data[i].password){
            setWarning2("Alright.");
        }
        else{
            setBorderDesign2({borderBottom:"3px solid #E8730C"});
            setWarning2("Please enter a valid password.");
        }

        setEmailData("");
        setPassData("");
    }

    return (
        <>
            <div className="front-page1">
                <div className="navbar-logo">
                    <h1>NETFLIX</h1>
                </div>
                <div className="form-cont">
                    <div className="form">
                        <div className="form-content">
                            <h1>Sign In</h1>
                            <form action="" onSubmit={GetEmailData}>    
                                <input style={borderDesign1} value={emailData} onChange={(e)=>setEmailData(e.target.value)} type="email" placeholder='Email or phone number' required/>
                                <p>{warning1}</p>
                                <input style={borderDesign2} value={passData} onChange={(e)=>setPassData(e.target.value)} type="password" placeholder='Password' required/><br />
                                <p>{warning2}</p>
                                <button type="submit" className='cursor'>Sign In</button>
                            </form>    
                            <div className='bookmark'><p id='rem' className='color'><input className="cursor" type="checkbox" name="remember" id="remember" />Remember me</p><p className='help color cursor'>Need help?</p></div><br /><br />
                            <div className='new-to'><p className='color'>New to Netflix?</p><Link to="/" className='sign-up-now cursor'>  Sign up now.</Link></div>
                            <p className='color captcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>

                        </div>
                    </div>
                </div> <br /><br /><br /><br />   
                <div className="login-footer">
                    <p className='grey'>Questions? <a className='grey underline' href="/">Call 000-800-919-1694</a></p>
                    <div className="login-option">
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
