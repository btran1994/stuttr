import { connect } from 'react-redux';
import { fetchPhoto, fetchPhotos, clearPhotoErrors, getUser } from '../../actions/photo_actions';
import PhotoShow from './photo_show';
import { fetchComments } from '../../actions/comment_actions'


const mapState = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        photo: state.entities.photos[ownProps.match.params.id],
        // owner: 
        id: ownProps.match.params.id,
    }
};

const mapDispatch = dispatch => {
    return {
        fetchPhoto: id => dispatch(fetchPhoto(id)),
        fetchComments: () => dispatch(fetchComments()),
        getUser: userId => dispatch(getUser(userId))
    }
};

export default connect(mapState, mapDispatch)(PhotoShow);