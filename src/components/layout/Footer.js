import React from 'react';
import Sns from './assets/sns.png'

const Footer = () => {
    return (
      <div className="d-flex footer">
        <div className="footer-block">
          <h5 className="cosmos-text">Cosmos</h5>
          <p className="cosmos-text">Lorem Ipsum is simply dummy text</p>
          <p className="cosmos-text"> of the printing and</p>
          <p className="cosmos-text"> typesetting industry.</p>
        </div>
        <div className="footer-block">
          <h5 className="cosmos-text">Company</h5>
          <p className="cosmos-text">About us</p>
          <p className="cosmos-text">Careers</p>
          <p className="cosmos-text">Contact us</p>
        </div>
        <div className="footer-block">
          <h5 className="cosmos-text">Products</h5>
          <p className="cosmos-text">Extension wallet</p>
          <p className="cosmos-text">Defistation</p>
          <p className="cosmos-text">Web Wallet</p>
          <p className="cosmos-text">Android Wallet</p>
        </div>
        <div className="footer-block">
          <h5 className="cosmos-text">Further information</h5>
          <p className="cosmos-text">Terms &</p>
          <p className="cosmos-text">Conditions</p>
          <p className="cosmos-text">Privacy policy</p>
        </div>
        <div className="footer-block">
          <h5 className="cosmos-text">Follow us</h5>
          <img src={Sns} alt="" />
        </div>
      </div>
    )
  }

  export default Footer;