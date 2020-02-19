import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props
        // console.log(this.state, 'initial state')

    }

    render() {
        
        if (this.props.currentUser) {
            return (
                <div className="header-buttons">
                    <div className="header-group">
                        <img className="splash-upload" onClick={() => this.props.openModal('upload')} src={window.upload} alt="" />
                        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
                        <button className="header-button" onClick={this.props.logout}>Log Out</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='splash-stuff'>
                    <nav className="login-signup">
                        <Link className="login-button" to="/login">Login</Link>
                        <Link className="signup-button" to="/signup"><h1 className="signup-button-center-text">Sign Up</h1></Link>
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
