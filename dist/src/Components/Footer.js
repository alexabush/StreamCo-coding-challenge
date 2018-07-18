import React, { Component } from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul>
          <li>Home</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
        <p>Copyright A 2016 DEMO Streaming. All Rights Reserved.</p>
        <div className="Flexbox-Container">
          <div>
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
          <div>
            <p>Downloads</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
