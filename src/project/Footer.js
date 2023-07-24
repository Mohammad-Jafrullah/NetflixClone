import React, { useState } from 'react';
import './Footer.css';
import PopUp from './PopUp';

export default function Footer() {
    const [openBox, setOpenBox] = useState(<PopUp hight="0vh" />);
    const [hight,setHight] = useState({});
    const [overflow,setOverflow] = useState("");

    const Cut = () => {
        setOpenBox(<PopUp hight="0vh" />)
        setOverflow("");
    }
    const OpenPopUp = () => {
        // setHight({animation: '1s ease 0s 1 reverse both paused hight'});
        setOpenBox(<PopUp hight="80vh" cancel={Cut}/>);
        setOverflow("hidden");
    }
    return (
        <>
            {openBox}
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here1</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here2</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here3</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here4</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here5</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here6</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here7</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here8</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here9</button>
            </div>
            <div className="btn">
                <p>Open a box to click this <button></button></p>
                <button onClick={OpenPopUp}>click here10</button>
            </div>
            <style>{`body {overflow: ${overflow}}`}</style>
        </>
    )
}
