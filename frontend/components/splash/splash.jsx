import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.profile = {
      pathname: `/users/${this.props.currentUser.id}`
    };

    this.photoLink = {
      pathname: '/photos'
    };
  }

  handleDropdown() {
    let dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="header-buttons">
          <div className="header-links">
            <Link
              to={this.photoLink}
              className="navbar-link"
            >
              Photos
            </Link>
            <Link
              to={this.profile}
              className="navbar-link"
            >
              You
            </Link>
          </div>
          <div className="header-group">
            <img
              className="splash-upload"
              onClick={() => this.props.openModal("upload")}
              src={window.upload}
              alt=""
            />
            <div className="profile-dropdown">
              <img
                className="profile-picture"
                onClick={this.handleDropdown.bind(this)}
                src={this.props.currentUser.imageUrl}
              />
            </div>
            <div id="dropdown">
              <ul className="dropdown-list">
                <li className="dropdown-name">
                  Hi, {this.props.currentUser.username}!
                </li>
                <li className="header-button">
                  <Link
                    to={this.profile}
                    onClick={this.handleDropdown.bind(this)}
                    className="profile-link"
                  >
                    Profile
                  </Link>
                </li>
                <li className="header-button" onClick={this.props.logout}>
                  Log Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="splash-stuff">
          <nav className="login-signup">
            <Link className="login-button" to="/login">
              Login
            </Link>
            <Link className="signup-button" to="/signup">
              <h1 className="signup-button-center-text">Sign Up</h1>
            </Link>
          </nav>
          <ul className="cb-slideshow">
            <li>
              <span>Image 01</span>
            </li>
            <li>
              <span>Image 02</span>
            </li>
            <li>
              <span>Image 03</span>
            </li>
            <li>
              <span>Image 04</span>
            </li>
            <li>
              <span>Image 05</span>
            </li>
            <li>
              <span>Image 06</span>
            </li>
            <li>
              <span>Image 07</span>
            </li>
            <li>
              <span>Image 08</span>
            </li>
            <li>
              <span>Image 09</span>
            </li>
            <li>
              <span>Image 10</span>
            </li>
            <li>
              <span>Image 11</span>
            </li>
            <li>
              <span>Image 12</span>
            </li>
          </ul>
        </div>
      );
    }
  }
};


export default Splash;
