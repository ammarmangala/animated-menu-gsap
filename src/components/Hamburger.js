import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
    <div className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/oppertunities">Oppertunities</Link>
                  </li>
                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis esse cum tempora nihil dicta, vel enim modi quaerat
                  tempore beatae earum natus molestiae corrupti, deserunt,
                  magnam laudantium fugit itaque atque dolor eaque id!
                  Necessitatibus, ut!
                </p>
              </div>
              <div className="locations">
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
