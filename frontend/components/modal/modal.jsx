import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadContainer from '../../components/upload/upload_container'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'upload':
            component = <UploadContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapState = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatch = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapState, mapDispatch)(Modal);