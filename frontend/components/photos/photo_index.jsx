import React, { useReducer } from 'react';
import {css} from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';

class PhotoIndex extends React.Component {
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
        this.props.history.push(`photos/${e.target.id}`)
        
    }

    render() {
        let photos = this.props.photos;
        if (photos.length < 13) {
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
                <ul className="photo-display">
                    {
                        photos.map((photo) => {
                            return (
                                <li key={photo.id} className="bigphotocontainer">
                                    <div className="photo-info-container">
                                        <img className='hover' onClick={this.handleClick} id={photo.id} src={photo.imageUrl} alt=""/>
                                        <div onClick={this.handleClick} id={photo.id} className='photo-stuff'>
                                            {photo.title}
                                            <br/>
                                            <br/>
                                            {photo.user.username}
                                        </div>
                                        <div onClick={this.handleClick} id={photo.id} className="photo-info-background">a</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            );
        }
        
    }
}

export default PhotoIndex;