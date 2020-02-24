import React from "react";
import ProfileContainer from './profile_container'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props,'profile props')
        return(
            <div className="profile-banner">
                <div className="profile-banner-box">
                    <img className="profile-banner-pic" src={this.props.currentUser.imageUrl} alt=""/>
                    </div>
                    {this.props.currentUser.username}
                    </div>
        );
    }
}

export default ProfilePage;