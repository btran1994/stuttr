export const createPhoto = photo => (
    $.ajax({
        method: 'POST',
        url: '/api/photos',
        data: photo,
        contentType: false,
        processData: false
    })
);

export const fetchPhoto = id => (
    $.ajax({
        method: 'GET',
        url: `/api/photos/${id}`
    })
);

export const fetchPhotos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/photos'
    })
);

export const deletePhoto = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/photos/${id}`
    })
)

export const getUser = id => {
  const user_id = parseInt(id);
  return $.ajax({
    method: "GET",
    url: `api/users/${user_id}`
  });
};

