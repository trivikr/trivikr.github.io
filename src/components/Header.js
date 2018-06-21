import React from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="https://twitter.com/trivikram" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Trivikram Kamat</strong>
          </h1>
          <h4>Software Development Engineer</h4>
          <div>
            <a href="https://github.com/nodejs/node">Node.js</a> core
            collaborator
          </div>
          <div>(he/him)</div>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
