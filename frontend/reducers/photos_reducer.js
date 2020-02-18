import { RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO } from '../actions/photo_actions';

const _nullPhoto = Object.freeze({
    
});

const photoReducer = (state = {}, action) => {
    let nextState = Object.assign({}, state)
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PHOTO:
            nextState[action.photo.id] = action.photo
            return nextState;
        case RECEIVE_PHOTOS:
            return action.photos;
        case REMOVE_PHOTO:
            return nextState;
        default: 
            return state;
    }
};

export default photoReducer;