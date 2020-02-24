import { connect } from "react-redux";
import { receiveCurrentUser } from "../../actions/session_actions";
import ProfilePage from "./profile";

const mapState = state => {
    console.log(state, 'profile cont state')
  return {
      currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatch = dispatch => {
  return {
  };
};

export default connect(mapState, mapDispatch)(ProfilePage);
