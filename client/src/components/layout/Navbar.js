import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from '../../img.jpg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <br/>
            {/* <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            > */}
              {/* <i className="material-icons">code</i> */}
              <Link
              to="/"><img src={img} alt="Logo" className="col s5 brand-logo center black-text" style= {{height:'50px',width: "30% "}}/></Link>
            {/* </Link> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
