import React from "react";
import ProfileContainer from './profile_container'
import Masonry from "react-masonry-component";
import { masonryOptions } from "../exports";
import { css } from "@emotion/core";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  handleClick(e) {
    this.props.history.replace(`photos/${e.target.id}`);
  }

  render() {
    const photoArray = Object.values(this.props.photos);
    let count = 0;
    if (photoArray.length > 0) {
      photoArray.forEach(photo => {
        if (photo.user.id == this.props.currentUser.id) {
          count += 1;
        }
      });
    }

    return (
      <div className="profile-page">
        <div className="background-banner">
          <div className="profile-banner">
            <div className="pfp-username">
              <div className="profile-banner-box">
                <img
                  className="profile-banner-pic"
                  src={this.props.currentUser.imageUrl}
                  alt=""
                />
              </div>
              <div className="profile-username">
                {this.props.currentUser.username} &nbsp; | &nbsp; {count} Photos
              </div>
              <div>{this.props.photos.length}</div>
            </div>
            <div className="join-date">
              Joined {this.props.currentUser.created_at.slice(0, 4)}
            </div>
          </div>
        </div>
        <div className="profile-navbar">Photos &nbsp; &nbsp; &nbsp; Albums</div>
        <div className="user-grid-holder">
          <Masonry
            className={"grid"}
            elementType={"div"}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {photoArray.map(photo => {
              if (photo.user.id == this.props.currentUser.id) {
                return (
                  <li
                    key={photo.id}
                    className="bigphotocontainer"
                    style={{ listStyle: "none" }}
                  >
                    <div className="photo-info-container">
                        <a href={'#/photos/' + photo.id}>
                            <img
                                className="hover"
                                id={photo.id}
                                src={photo.imageUrl}
                                style={{ width: 300 }}
                                alt=""
                            />
                            <div
                                id={photo.id}
                                className="photo-stuff"
                                >
                                {photo.title}
                                <br />
                                <br />
                                {photo.user.username}
                            </div>
                            <div
                                id={photo.id}
                                className="photo-info-background"
                                ></div>
                        </a>
                    </div>
                  </li>
                );
              }
            })}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default ProfilePage;