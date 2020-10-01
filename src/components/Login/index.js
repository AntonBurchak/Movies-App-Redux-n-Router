import Login from './component'
import { connect } from 'react-redux';
import { loginUser, fetchUsersList } from '../../core/actions'
import withTranslation from '../../hocs/withTranslation';

const mapStateToProps = (state) => ({
    isLogged: state.usersReducer.isLogged,
    users: state.usersReducer.users
});

const mapDispatchToProps = ({
    loginUser,
    fetchUsersList
});

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

const words = [
    'app-login-title',
    'app-login-log-placeholder',
    'app-login-pass-placeholder',
    'app-login-button',
    'app-login-prompt',
    'app-login-reglink',
]

export default withTranslation(words)(withStore(Login));