import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const CLEAR_PHOTO_ERRORS = 'CLEAR_PHOTO_ERRORS';

export const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
});

export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receivePhotoErrors = errors => ({
    type: RECEIVE_PHOTO_ERRORS,
    errors
});

export const removePhoto = photo => ({
    type: REMOVE_PHOTO,
    id: photo.id
})

export const clearPhotoErrors = () => ({
    type: CLEAR_PHOTO_ERRORS
});

const receivePageOwner = owner => {
  return {
    type: RECEIVE_PAGE_OWNER,
    owner
  };
};

export const getUser = id => dispatch => {
  return PhotoAPIUtil.getUser(id).then(user =>
    dispatch(receivePageOwner(user))
  );
};

export const fetchPhoto = id => dispatch => (
    PhotoAPIUtil.fetchPhoto(id).then(photo => (
        dispatch(receivePhoto(photo))
    ), err => (
        dispatch(receivePhotoErrors(err.responseJSON))
    ))
);

export const fetchPhotos = () => dispatch => (
    PhotoAPIUtil.fetchPhotos().then(photos => (
        dispatch(receivePhotos(photos))
    ), err => (
        dispatch(receivePhotoErrors(err.responseJSON))
    ))
);

export const createPhoto = photo => dispatch => (
    PhotoAPIUtil.createPhoto(photo).then(photo => {
        dispatch(receivePhoto(photo))
    }, err => (
        dispatch(receivePhotoErrors(err.responseJSON))
    ))
);

export const deleteMe = id => dispatch => (
    PhotoAPIUtil.deletePhoto(id), then(id => (
        dispatch(removePhoto(id))
    ), err => (
        dispatch(receivePhotoErrors(err.responseJSON))
    ))
);