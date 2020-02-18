import React from "react";
import SplashContainer from './splash/splash_container';
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoIndexContainer from './photos/photo_container';
import PhotoShowContainer from './photos/photo_show_container';
import Splash from "./splash/splash";
import Modal from './modal/modal';

const App = () => (
    <div className="splash-main">
        <Modal />
        <header className="splash-header">
            <a href="#/photos" className="home-button">Stuttr?</a>
            <Route path='/' component={SplashContainer} />
        </header>
        <div className="default-background"></div>
        
        <Switch>
            <ProtectedRoute exact path="/photos/:id" component={PhotoShowContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/photos" component={PhotoIndexContainer} />
            <Route path='*'><Redirect to='/' /></Route>
        </Switch>
            
            
            <footer className="footer">
                <a href="https://github.com/btran1994" className="git-link"><img src={window.git}/></a>
            </footer>
        
    </div>
            
);

export default App;
