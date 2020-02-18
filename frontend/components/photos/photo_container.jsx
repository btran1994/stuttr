import { connect } from 'react-redux';
import { fetchPhoto, fetchPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapState = state => {
    return {
        photos: Object.values(state.entities.photos)
    }
};

const mapDispatch = dispatch => {
    return {
        fetchPhoto: id => dispatch(fetchPhoto(id)),
        fetchPhotos: () => dispatch(fetchPhotos())
    }
};

export default connect(mapState, mapDispatch)(PhotoIndex);