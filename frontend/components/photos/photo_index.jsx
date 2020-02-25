import React, { useReducer } from 'react';
import {css} from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';
import Masonry from "react-masonry-component";
import { masonryOptions } from '../exports'

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.override = css`
          display: block;
          margin: 0 auto;
          border-color: red;
        `;

        this.didLoad = this.props.loaded;
        this.handleImagesLoaded = this.handleImagesLoaded.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    loaded() {
        return 
    }

    handleImagesLoaded(imagesLoadedInstance) {
        this.render();
    }

    componentDidMount() {
        this.props.fetchPhotos()
            .then(this.didLoad = true);
    }

    handleLoad() {
      this.didLoad = true;
    }

    handleClick(e) {
        this.props.history.push(`photos/${e.target.id}`)
        
    }

    render() {
        let photos = this.props.photos;
        if (this.didLoad === false) {
            return (
                <div className="index-loader">
                    <CircleLoader
                        css={this.override}
                        sizeUnit={"px"}
                        size={50}
                        color={"#000000"}
                    />
                </div>
            );
        } else {
            return (
              <div className="grid-holder">
                <Masonry
                  className={"grid"}
                  elementType={"div"}
                  options={masonryOptions}
                  // disableImagesLoaded={false}
                  onImagesLoaded={this.handleImagesLoaded}
                  updateOnEachImageLoad={false}
                >
                  {photos.map(photo => {
                    return (
                      <li
                        key={photo.id}
                        className="bigphotocontainer"
                        style={{ listStyle: "none" }}
                      >
                        <div className="photo-info-container">
                          <img
                            className="hover"
                            onClick={this.handleClick}
                            id={photo.id}
                            src={photo.imageUrl}
                            style={{ width: 300 }}
                            alt=""
                          />
                          <div
                            onClick={this.handleClick}
                            id={photo.id}
                            className="photo-stuff"
                          >
                            {photo.title}
                            <br />
                            <br />
                            {photo.user.username}
                          </div>
                          <div
                            onClick={this.handleClick}
                            id={photo.id}
                            className="photo-info-background"
                          >
                            a
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </Masonry>
              </div>
              // </OnImagesLoaded>
            );
        }
        
    }
}

export default PhotoIndex;