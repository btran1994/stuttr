import { connect } from 'react-redux';
import React from 'react';
import { uploadPhoto, createPhoto } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import UploadForm from './upload_form';

const mapState = (state, imageUrl) => {
    console.log(state,'upload state')
    return {
        formType: 'upload',
        photo: {
            user_id: state.entities.users[state.session.id].id,
            title: "",
            description: "",
            imageUrl
        }
    }
};

const mapDispatch = dispatch => {
    return {
        closeModal: (modal) => dispatch(closeModal(modal)),
        processForm: photo => dispatch(createPhoto(photo))
    };
};

export default connect(mapState, mapDispatch)(UploadForm);