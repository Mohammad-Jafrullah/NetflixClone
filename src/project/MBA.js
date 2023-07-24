import React, { useState, useEffect } from 'react';
import './MBA.css';
import { ImageOfMBA } from './ImageOFMBA';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';

export default function MBA() {
    const [id, setID] = useState(0);
    const [border, setBorder] = useState({});

    const nextImage = () => {
        setID(id + 1);
    }
    const previousImage = () => {
        setID(id - 1);
    }



    return (
        <>
            <div className="content">
                <div className="image">
                    {id === 0 ? (
                        <></>
                    ) : (
                        <button className='left' onClick={previousImage}><AiOutlineLeft /></button>
                    )}
                    {id === ImageOfMBA.length - 1 ? (
                        <></>
                    ) : (
                        <button className='right' onClick={nextImage}><AiOutlineRight /></button>
                    )}
                    <img src={ImageOfMBA[id].imageUrl} alt="not show" />
                    {id === ImageOfMBA.length - 1 ? (
                        <></>
                    ) : (
                        <img className='showTen' src={ImageOfMBA[id + 1].imageUrl} alt="not show" />
                    )}
                </div>
                <div className="second">
                    {ImageOfMBA.slice(0, 5).map((box) => {
                        return (
                            <>
                                {box.id === id ? (
                                    <div className="imagebox" style={{ border: '2px solid red' }}>
                                        <img onClick={() => setID(box.id)} src={box.imageUrl} alt="not show" />
                                    </div>
                                ) : (
                                    <div className="imagebox" style={{ border: 'none' }}>
                                        <img onClick={() => setID(box.id)} src={box.imageUrl} alt="not show" />
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>
                <h4 style={{color: 'black'}}>{id+1}/{ImageOfMBA.length}</h4>
                <p style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident temporibus velit eos recusandae ipsa nulla expedita nemo. </p>
            </div>
        </>
    )
}
