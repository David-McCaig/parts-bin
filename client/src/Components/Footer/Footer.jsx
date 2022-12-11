import React from "react";
import facebook from "../../assets/icons/Icon-facebook.svg"
import twitter from "../../assets/icons/Icon-twitter.svg"
import instagram from "../../assets/icons/Icon-instagram.svg"
import { NavLink, Link} from "react-router-dom";
import "./Footer.scss"

const Footer = () => {
  return (
    <>
    <div className="footer-line"></div>
    <footer className="contact-top">
    <div className="contact-top__social">
    
         {/* <a to={{ pathname: "https://instagram.com"}} target="_blank">
            <img class="contact-top__social-icon" src={instagram} alt="Instagram link"></img>
         <a/>  */}
         {/* <NavLink to="https://facebook.com" target="_blank" rel="noreferrer">
            <img class="contact-top__social-icon" src={facebook} alt="Facebook link"></img>
        </NavLink>
        <NavLink to="https://twitter.com" target="_blank" rel="noreferrer">
            <img class="contact-top__social-icon" src={twitter} alt="Twitter link"></img>
        </NavLink>  */}
            
    </div>
    <div className="contact">
    <div className="contact__containers">
        <h4 className="contact__management-name">Shop</h4>
        <h4 className="contact__management-address">Components</h4>
        <p className="contact__management-address">Bikes</p>
        <p className="contact__management-address-bottom">Frames</p>
        <p className="contact__management-email">Wheels</p>
    </div>
    <div className="contact__containers">
        <h4 className="contact__management-name">Sales + Support</h4>
        <p className="contact__management-address">Login
        </p>
        <p className="contact__management-address-bottom">Contact US</p>
        <p className="contact__management-email">Privacy Policy</p>
    </div>
    <div className="contact__containers">
        <h4 className="contact__management-name">About Us</h4>
        <p className="contact__management-address">Careers
        </p>
        <p className="contact__management-address-bottom">Contact US</p>
        <p className="contact__management-email">cwhyte@archentertainment.com</p>
    </div>
    </div>
</footer>
</>
  );
};

export default Footer;