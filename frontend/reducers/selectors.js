export const photoComments = (comments, photoId) => {
    const selected = [];
    Object.keys(comments).forEach(key => {
        if (comments[key].photoId === photoId) selected.push(comments[key]);
    });
    return selected;
};