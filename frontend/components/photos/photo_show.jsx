import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container'

class PhotoShow extends React.Component {
    constructor(props) {
        console.log(props, 'props');
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.id);
        this.props.fetchComments()
        .then(comments => {
            console.log(comments)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchPhoto(this.props.id);
        }
    }

    render() {
        let photo = this.props.photo
        if (photo) {
            console.log(photo, 'photo')
            return(
                <div className="photo-show">
                    <li className="photo-wrap">
                        <img src={photo.imageUrl} alt="" />
                    </li>
                    <li className="photo-title-description">
                        <div className="profile-pic">
                        </div>
                        <div className="photo-user">
                            <h1>{photo.user.username}</h1>
                            <br/>
                            {photo.description}
                        </div>
                    </li>
                    <CommentIndexContainer photo={photo} />
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default PhotoShow;