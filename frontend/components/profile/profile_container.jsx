import { connect } from "react-redux";
import { receiveCurrentUser } from "../../actions/session_actions";
import ProfilePage from "./profile";
import { fetchPhoto, fetchPhotos } from "../../actions/photo_actions";

const mapState = state => {
  return {
      currentUser: state.entities.users[state.session.id],
      photos: state.entities.photos
  };
};

const mapDispatch = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  };
};

export default connect(mapState, mapDispatch)(ProfilePage);
