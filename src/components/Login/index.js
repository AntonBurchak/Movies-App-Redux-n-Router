import Login from './component'
import { connect } from 'react-redux';
import { loginUser, fetchUsersList } from '../../core/actions'

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

export default withStore(Login);