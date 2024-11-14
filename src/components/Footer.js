import React from 'react'
import logo from '../assets/flix.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <style>
        {`
        
          .footer-bs {
              background-color: #221f20;
              padding: 60px 40px;
              color: rgba(255, 255, 255, 1.00);
          }
          .footer-bs .footer-brand,
          .footer-bs .footer-nav,
          .footer-bs .footer-social,
          .footer-bs .footer-ns {
              padding: 10px 25px;
          }
          .footer-bs .footer-nav,
          .footer-bs .footer-social,
          .footer-bs .footer-ns {
              border-color: transparent;
          }
          .footer-bs .footer-brand h2 {
              margin: 0px 0px 10px;
          }
          .footer-bs .footer-brand p {
              font-size: 12px;
              color: rgba(255, 255, 255, 0.70);
          }
          .footer-bs .footer-nav ul.pages {
              list-style: none;
              padding: 0px;
          }
          .footer-bs .footer-nav ul.pages li {
              padding: 5px 0px;
          }
          .footer-bs .footer-nav ul.pages a {
              color: rgba(255, 255, 255, 1.00);
              font-weight: bold;
              text-transform: uppercase;
          }
          .footer-bs .footer-nav ul.pages a:hover {
              color: rgba(255, 255, 255, 0.80);
              text-decoration: none;
          }
          .footer-bs .footer-nav h4 {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 3px;
              margin-bottom: 10px;
          }
          .footer-bs .footer-nav ul.list {
              list-style: none;
              padding: 0px;
          }
          .footer-bs .footer-nav ul.list li {
              padding: 5px 0px;
          }
          .footer-bs .footer-nav ul.list a {
              color: rgba(255, 255, 255, 0.80);
          }
          .footer-bs .footer-nav ul.list a:hover {
              color: rgba(255, 255, 255, 0.60);
              text-decoration: none;
          }
          .footer-bs .footer-social ul {
              list-style: none;
              padding: 0px;
          }
          .footer-bs .footer-social h4 {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 3px;
          }
          .footer-bs .footer-social li {
              padding: 5px 4px;
          }
          .footer-bs .footer-social a {
              color: rgba(255, 255, 255, 1.00);
          }
          .footer-bs .footer-social a:hover {
              color: rgba(255, 255, 255, 0.80);
              text-decoration: none;
          }
          .footer-bs .footer-ns h4 {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 3px;
              margin-bottom: 10px;
          }
          .footer-bs .footer-ns p {
              font-size: 12px;
              color: rgba(255, 255, 255, 0.70);
          }
          @media (min-width: 768px) {
              .footer-bs .footer-nav,
              .footer-bs .footer-social,
              .footer-bs .footer-ns {
                  border-left: solid 1px rgba(255, 255, 255, 0.10);
              }
          }
        `}
      </style>
      <footer className="footer-bs">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft">
              <Link to={"/"}>
                    <img
                        src={logo}
                        alt='logo'
                        width={120} 
                    />
                </Link>
            
            
          </div>

          <div className="col-md-4 col-3 footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <div className="col-md-6 col-2">
              <ul className="pages">
                <li><a href="#">Tv shows</a></li>
                <li><a href="#">Popular series</a></li>
                <li><a href="#">Action movies</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-3">
              <ul className="list">
                <a href="#">About Us</a>
                <a href="#">Contacts</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
              </ul>
            </div>
          </div>

          <div className="col-md-2 col-3 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">RSS</a>
            </ul>
          </div>

          <div className="col-md-3 col-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>Fillin' your mail with spam since, woah, a lot of time.</p>
            <p>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-envelope"></span>
                  </button>
                </span>
              </div>
            </p>
          </div>
        </div>
    <p>Created By Connie</p>
   </footer>
   </>
  )
}

export default Footer
