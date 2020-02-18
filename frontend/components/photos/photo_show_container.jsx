import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhoto, fetchPhotos, clearPhotoErrors } from '../../actions/photo_actions';
import PhotoShow from './photo_show';
import { fetchComments } from '../../actions/comment_actions'


const mapState = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        photo: state.entities.photos[ownProps.match.params.id],
        id: ownProps.match.params.id
    }
};

const mapDispatch = dispatch => {
    return {
        fetchPhoto: id => dispatch(fetchPhoto(id)),
        fetchComments: () => dispatch(fetchComments())
    }
};

export default connect(mapState, mapDispatch)(PhotoShow);