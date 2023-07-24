import React, { useState } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {

    return (
        <>
            <div className="main-bodyyy">
                <div className="title">
                    <h2>Courses</h2>
                </div>
                <ul className='navbar'>
                    <li><Link to="/mba">MBA</Link></li>
                    <li><Link to="/mbbs">MBBS</Link></li>
                    <li><Link to="/btech">B.Tech</Link></li>
                </ul>
            </div>
        </>
    )
}
