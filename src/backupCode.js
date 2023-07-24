import React from 'react';
import './Putatoe.css';
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine,RiFacebookLine } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";



export default function Putatoe() {
  return (
    <>
        <div className='home-body'>
            <div className="navbar1">
                <div className="left">
                    <img src="https://www.putatoe.com/img/logo.png" alt="" />
                    <h2>PUTATOE <br /><p>One Solution</p></h2>
                    
                </div>
                <div className="midle">
                    <ul className="btns">
                        <li><input type="text" className='search-box' placeholder='Search for products and brands'/><a href='' className="srch-btn"><BiSearchAlt2/></a></li>
                        <li><a href=""><TbMessageCircle2Filled/></a></li>
                        <li><a href=""><MdLocalGroceryStore/></a></li>
                        <li><a href=""><FaBell/></a></li>
                    </ul>
                </div>
                <div className="right">
                    <button className="login">LOGIN</button>
                </div>
            </div>
            <div className="main-body">
                <div className="body1">
                    <ul className='recharge'>
                        <li><img src="https://www.putatoe.com/img/categoryTopBar/MOBILE-Recharge-blue-png.png" alt="Can't load images without internet" /><a href=''>MOBILE</a></li>
                        <li><img src="https://www.putatoe.com/img/categoryTopBar/CREDIT-CARD-blue-png.png" alt="" /><a href="">DTH</a></li>
                        <li><img src="https://www.putatoe.com/img/categoryTopBar/HOME-LOAN-blue-png%20.png" alt="" /><a href="">LOANS</a></li>
                        <li><img src="https://www.putatoe.com/img/categoryTopBar/NEWS-blue-png.png" alt="" /><a href="">NEWS</a></li>
                        <li><img src="https://www.putatoe.com/img/categoryTopBar/PROMOTION-blue-png.png" alt="" /><a href="">PROMOTIONS</a></li>
                        <li><img src="https://www.putatoe.com/img/categoryTopBar/BLOG-2-blue-png.png" alt="" /><a href="">BLOGS</a></li>
                    </ul>
                </div>
                <img src="https://storage.googleapis.com/putatoeapp/Image/testImage/68V03LL" alt="" className="ad" /><br /><br />
                <h1>All Products</h1>
                <div className="images">
                    <img src="https://storage.googleapis.com/putatoeapp/Image/testImage/X0R1DJI" alt="" />
                    <img src="https://storage.googleapis.com/putatoeapp/Image/testImage/CBCXNEB" alt="" />
                    <img src="https://storage.googleapis.com/putatoeapp/Image/testImage/LU4BK0Q" alt="" />
                </div>    
                <h1>All Services</h1>
                <div className="images">
                    <img src="https://storage.googleapis.com/putatoeapp/Image/testImage/TRVXOAJ" alt="" />
                    <img src="https://storage.googleapis.com/putatoeapp/Image/testImage/LRMWK6M" alt="" />
                    <img src="https://storage.googleapis.com/putatoeapp/Image/testImage/QYXQIMA" alt="" />
                </div>    
            </div>
            <footer>
                <div className="left-side">
                    <img src="https://www.putatoe.com/img/logo.png" alt="" className="logo" />
                    <h3>PUTATOE SOLUTION PVT. LTD.</h3>
                    <p>233 Harahawa Phatak, Near SBI Bank, Gorakhpur, Uttar Pradesh - 273001</p>
                </div> 
                <div className="right-side">
                    <h4>Useful Links</h4>
                    <a href="/about">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Terms and Conditions</a><br />
                    <i className='mrg'><RiFacebookLine/></i><i><AiOutlineInstagram/></i><i><RiLinkedinLine/></i>
                </div>   
            </footer>
        </div>
    </>    
  )
}
