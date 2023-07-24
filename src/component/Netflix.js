import React, { useState, useEffect } from 'react'
import './Netflix.css';
import { FaAngleRight } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { Answer1, Answer2, Answer3, Answer4, Answer5, Answer6 } from './Answer';
import allEmails from './AllEmails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../project/Main';
import Footer from '../project/Footer';
import MBA from '../project/MBA';
import MBBS from '../project/MBBS';
import Btech from '../project/Btech';

function Netflix() {

  // *******DECLERATION*******

  const [languageValue, setLanguageValue] = useState("english");
  const [text, setText] = useState("Unlimited movies, TV shows and more");
  const [borderBottom, setBorderBottom] = useState({});
  const [borderBottom1, setBorderBottom1] = useState({});

  const [Email, setEmail] = useState("");
  const [Email1, setEmail1] = useState("");
  const [warning, setWarning] = useState("");
  const [warning1, setWarning1] = useState("");
  const navigate = useNavigate();
  const [storeEmail, setStoreEmail] = useState([]);



  const [icon1, setIcon1] = useState(<AiOutlinePlus />);
  const [icon2, setIcon2] = useState(<AiOutlinePlus />);
  const [icon3, setIcon3] = useState(<AiOutlinePlus />);
  const [icon4, setIcon4] = useState(<AiOutlinePlus />);
  const [icon5, setIcon5] = useState(<AiOutlinePlus />);
  const [icon6, setIcon6] = useState(<AiOutlinePlus />);

  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [content5, setContent5] = useState("");
  const [content6, setContent6] = useState("");

  let numOfElement = allEmails.length;

  // **********************************************************************

  const GetEmail1 = (e) => {
    e.preventDefault();
    var hello1 = false;
    for (var i = 0; i < numOfElement; i++) {
      if (Email1 === allEmails[i]) {
        hello1 = true;
        break;
      }
    }
    if (hello1 === true) {
      navigate("/login");
      setWarning1("Alright.");
    }
    else {
      setBorderBottom1({ borderBottom: "3px solid #E8730C" });
      setWarning1("Please enter a valid email address.");
    }
    setEmail1("");
  }

  // **********************************************************************

  const GetEmail = (e) => {
    e.preventDefault();
    var hello = false;
    for (var i = 0; i < 5; i++) {
      if (Email === allEmails[i]) {
        hello = true;
        console.log("qqqqqqqqqq");
        setStoreEmail([...storeEmail, Email]);
        break;
      }
    }
    if (hello === true) {
      navigate("/step1");
    }
    else {
      setBorderBottom({ borderBottom: "3px solid #E8730C" });
      setWarning("Please enter a valid email address.");
    }
    setEmail("");
    console.log(storeEmail);
  }

  //********OnClick*********
  const Open1 = () => {
    if (content1 === "") {
      setContent1(<Answer1 />); setContent2(""); setContent3(""); setContent4(""); setContent5(""); setContent6("");
      setIcon1(<RxCross2 />); setIcon2(<AiOutlinePlus />); setIcon3(<AiOutlinePlus />); setIcon4(<AiOutlinePlus />); setIcon5(<AiOutlinePlus />); setIcon6(<AiOutlinePlus />);
    }
    else {
      setContent1("");
      setIcon1(<AiOutlinePlus />);
    }
  }
  const Open2 = () => {
    if (content2 === "") {
      setContent2(<Answer2 />); setContent1(""); setContent3(""); setContent4(""); setContent5(""); setContent6("");
      setIcon2(<RxCross2 />); setIcon1(<AiOutlinePlus />); setIcon3(<AiOutlinePlus />); setIcon4(<AiOutlinePlus />); setIcon5(<AiOutlinePlus />); setIcon6(<AiOutlinePlus />);
    }
    else {
      setContent2("");
      setIcon2(<AiOutlinePlus />);
    }
  }
  const Open3 = () => {
    if (content3 === "") {
      setContent3(<Answer3 />); setContent2(""); setContent1(""); setContent4(""); setContent5(""); setContent6("");
      setIcon3(<RxCross2 />); setIcon2(<AiOutlinePlus />); setIcon1(<AiOutlinePlus />); setIcon4(<AiOutlinePlus />); setIcon5(<AiOutlinePlus />); setIcon6(<AiOutlinePlus />);
    }
    else {
      setContent3("");
      setIcon3(<AiOutlinePlus />);
    }
  }
  const Open4 = () => {
    if (content4 === "") {
      setContent4(<Answer4 />); setContent2(""); setContent3(""); setContent1(""); setContent5(""); setContent6("");
      setIcon4(<RxCross2 />); setIcon2(<AiOutlinePlus />); setIcon3(<AiOutlinePlus />); setIcon1(<AiOutlinePlus />); setIcon5(<AiOutlinePlus />); setIcon6(<AiOutlinePlus />);
    }
    else {
      setContent4("");
      setIcon4(<AiOutlinePlus />);
    }
  }
  const Open5 = () => {
    if (content5 === "") {
      setContent5(<Answer5 />); setContent2(""); setContent3(""); setContent4(""); setContent1(""); setContent6("");
      setIcon5(<RxCross2 />); setIcon2(<AiOutlinePlus />); setIcon3(<AiOutlinePlus />); setIcon4(<AiOutlinePlus />); setIcon1(<AiOutlinePlus />); setIcon6(<AiOutlinePlus />);
    }
    else {
      setContent5("");
      setIcon5(<AiOutlinePlus />);
    }
  }
  const Open6 = () => {
    if (content6 === "") {
      setContent6(<Answer6 />); setContent2(""); setContent3(""); setContent4(""); setContent5(""); setContent1("");
      setIcon6(<RxCross2 />); setIcon2(<AiOutlinePlus />); setIcon3(<AiOutlinePlus />); setIcon4(<AiOutlinePlus />); setIcon5(<AiOutlinePlus />); setIcon1(<AiOutlinePlus />);
    }
    else {
      setContent6("");
      setIcon6(<AiOutlinePlus />);
    }
  }


  const ChangeLang = (e) => {
    const newValue = e.target.value;
    setLanguageValue(newValue);
    if (newValue === "hindi") {
      setText("अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ");
    }
    else {
      setText("Unlimited movies, TV shows and more");
    }
  }

  // ************************************************************************


  return (
    <>
      <div className='front-page'>
        <div className="navbar-logo">
          <h1>NETFLIX</h1>
          <ul className="buttons">
            <li><i className='language'><MdLanguage /></i><select className='cursor' name="language" value={languageValue} onChange={ChangeLang}><option value="english" className='vis'>English</option><option value="hindi" className='vis'>Hindi</option></select></li>
            <li><button className='cursor red'><Link to="/login" className='sign'>Sign In</Link></button></li>
          </ul>
        </div>
        <div className="body-content">
          <h1>{text}</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input">
            <form action="" onSubmit={GetEmail}>
              <input type="email" style={borderBottom} value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' required />
              <button className='cursor red email-button' type='submit'>Get Started <i><FaAngleRight /></i></button>
              <p>{warning}</p>
            </form>
          </div>
        </div>
      </div>
      {/***************second line*****************/}

      {/* <OtherWebsite /> */}
      <div style={{ height: '200vh', backgroundColor: 'white' }}>
        <Main />
        <Routes>
          <Route path="" element={<MBA />} />
          <Route path="/mba" element={<MBA />} />
          <Route path="/mbbs" element={<MBBS />} />
          <Route path="/btech" element={<Btech />} />
        </Routes>
        <Footer />
      </div>
      <div className="box1">
        <div className="text">
          <h1>Enjoy on your TV</h1><br />
          <p>Watch on smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players and <br /> more.</p>
        </div>
        <div className="img">
          <div className="img1"></div>
        </div>
      </div>

      {/* **********Box2***********   */}

      <div className="box2">
        <div className="img">
          <div className='img2'></div>
        </div>
        <div className="text">
          <h1>Download your <br /> shows to watch <br /> offline</h1><br />
          <p>Save your favourites easily and always have <br /> something to watch.</p>
        </div>
      </div>

      {/* ************Box3**************** */}

      <div className="box2">
        <div className="text">
          <h1>Watch everywhere</h1><br />
          <p className='p-text'>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</p>
        </div>
        <div className="img">
          <div className="img3"></div>
        </div>
      </div>

      {/* ************Box4**************** */}

      <div className="box2">
        <div className="img">
          <div className="img4"></div>
        </div>
        <div className="text">
          <h1>Create profiles for <br /> kids</h1><br />
          <p className='p-text1'>Send children on adventures with their favourite characters in a space made just for them—free <br /> with your membership.</p>
        </div>
      </div>

      {/* **************Box5************* */}

      <div className="box5">
        <h1>Frequently Asked Questions</h1><br />
        <div className="que1 que cursor" onClick={Open1}><p>What is Netflix?</p> <i className="plus">{icon1}</i></div>
        {content1}
        <div className="que2 que cursor" onClick={Open2}><p>How much does Netflix cost?</p> <i className="plus">{icon2}</i></div>
        {content2}
        <div className="que3 que cursor" onClick={Open3}><p>Where can I watch?</p> <i className="plus">{icon3}</i></div>
        {content3}
        <div className="que4 que cursor" onClick={Open4}><p>How do I cancel?</p> <i className="plus">{icon4}</i></div>
        {content4}
        <div className="que5 que cursor" onClick={Open5}><p>What can I watch on Netflix?</p> <i className="plus">{icon5}</i></div>
        {content5}
        <div className="que6 que cursor" onClick={Open6}><p>Is Netflix goo for kids?</p> <i className="plus">{icon6}</i></div>
        {content6}<br />
        <p>Ready to watch? Enter your email to create or restart your membership.</p><br />
        <div className="input">
          <form action="" onSubmit={GetEmail1}>
            <input type="email" style={borderBottom1} value={Email1} onChange={(e) => setEmail1(e.target.value)} placeholder='Email address' required />
            <button type='submit' className='cursor red'>Get Started <i><FaAngleRight /></i></button>
            <p className='warn'>{warning1}</p>
          </form>
        </div>
      </div>

      {/* **************Box5************* */}

      <div className="footer box1">
        <div className="lists">
          <div className="options">
            <ul><br /><br /><br />
              <li>Questions? Call <a href="/">000-800-919-1694</a></li><br /><br /><br />
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Media Centre</a></li>
              <li><a href="/">Ways to Watch</a></li>
              <li><a href="/">Cookie Preferences</a></li>
              <li><a href="/">Speed Test</a></li>
              <li><i className='ic'><MdLanguage /></i><select className='cursor sel' name="language" value={languageValue} onChange={ChangeLang}><option value="english">English</option><option value="hindi">Hindi</option></select></li>
              <li><p className='in'>Netflix India</p></li>
            </ul>
          </div>
          <div className="options">
            <ul>
              <br /><br /><br /><br />
              <li><a href="/">Help Centre</a></li>
              <li><a href="/">Investor Relations</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Corporate Information</a></li>
              <li><a href="/">Legal Notices</a></li>
            </ul>
          </div>
          <div className="options">
            <ul>
              <br /><br /><br /><br />
              <li><a href="/">Account</a></li>
              <li><a href="/">Jobs</a></li>
              <li><a href="/">Privacy</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Only on Netflix</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Netflix
