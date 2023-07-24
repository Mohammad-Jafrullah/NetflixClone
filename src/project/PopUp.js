import React from 'react';
import './PopUp.css';
import { RxCross1 } from 'react-icons/rx';

export default function PopUp(props) {
  const links = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'About Us', url: '/about' },
    { id: 3, text: 'Services', url: '/services' },
    { id: 4, text: 'Contact', url: '/contact' },
  ];
  return (
    <>
      <div className="pop-body" style={{ height: props.hight }}>
        <div className="pop-box" style={{ height: '80%' }}>
          <div className="content" style={{ width: '100vw',overflow: 'auto' }}>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            </p>
            <h2>Our Services</h2>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO Services</li>
            </ul>
          </div>
          <button onClick={props.cancel}><RxCross1 /></button>
        </div>
      </div>
    </>
  )
}
