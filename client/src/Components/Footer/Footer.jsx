import React from "react";
import facebook from "../../assets/icons/Icon-facebook.svg"
import twitter from "../../assets/icons/Icon-twitter.svg"
import instagram from "../../assets/icons/Icon-instagram.svg"
import "./Footer.scss"

const Footer = () => {
  return (
    <>
    <footer class="contact-top">
    <div class="contact-top__social">
        <h3 class="contact-top__social-title">Get in Touch</h3>
    
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img class="contact-top__social-icon" src={instagram} alt="Instagram link"></img>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img class="contact-top__social-icon" src={facebook} alt="Facebook link"></img>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img class="contact-top__social-icon" src={twitter} alt="Twitter link"></img>
        </a>
            
    </div>
    <div class="contact">
    <div class="contact__containers">
        <h4 class="contact__management-name">Shop</h4>
        <h4 class="contact__management-name">Components</h4>
        <p class="contact__management-address">Bikes</p>
        <p class="contact__management-address-bottom">Frames</p>
        <p class="contact__management-email">Wheels</p>
    </div>
    <div class="contact__containers">
        <h4 class="contact__management-name">Sales + Support</h4>
        <p class="contact__management-address">Login
        </p>
        <p class="contact__management-address-bottom">Contact US</p>
        <p class="contact__management-email">Privacy Policy</p>
    </div>
    <div class="contact__containers">
        <h4 class="contact__management-name">About Us</h4>
        <p class="contact__management-address">Careers
        </p>
        <p class="contact__management-address-bottom">Contact US</p>
        <p class="contact__management-email">cwhyte@archentertainment.com</p>
    </div>
    </div>
</footer>
</>
  );
};

export default Footer;