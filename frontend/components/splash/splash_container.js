import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Splash from './splash';


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
      currentUser: users[session.id],
      imageUrl: "",
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);
