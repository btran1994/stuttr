import { connect } from 'react-redux';
import { fetchPhoto, fetchPhotos, clearPhotoErrors, getUser } from '../../actions/photo_actions';
import PhotoShow from './photo_show';
import { fetchComments } from '../../actions/comment_actions'


const mapState = (state, ownProps) => {
    // console.log(state, 'show cont')
    // console.log(ownProps, 'show own')
    // console.log(Object.values(state.entities.photos)[0], 'photo containter');
    return {
        currentUser: state.entities.users[state.session.id],
        photo: state.entities.photos[ownProps.match.params.id],
        id: ownProps.match.params.id,
        // pfp: (Object.values(state.entities.photos)[0]).imageUrl
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