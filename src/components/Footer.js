import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/trivikram"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/trivikr" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/trivikramkamat/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/trivikramkamat"
                className="icon fa-youtube"
              >
                <span className="label">YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.quora.com/profile/Trivikram-Kamat"
                className="icon fa-quora"
              >
                <span className="label">Quora</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@trivikram"
                className="icon fa-medium"
              >
                <span className="label">Medium</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Gatsby Starter Strata</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
