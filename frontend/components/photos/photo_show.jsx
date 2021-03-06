import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container'

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.uploader
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.id);
        this.props.fetchComments()
        this.props.getUser(this.props.currentUser.id)
            .then((owner) => this.uploader = owner.owner)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchPhoto(this.props.id);
        }
    }

    render() {
        let photo = this.props.photo
        if (photo) {
            return(
                <div className="photo-show">
                    <li className="photo-wrap">
                        <img className="photo-show-img" src={photo.imageUrl} alt="" />
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