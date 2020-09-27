import Registration from './component';
import { connect } from 'react-redux';
import { registerUser, fetchUsersList } from '../../core/actions'

const mapStateToProps = (state) => ({
    users: state.usersReducer.users
})
const mapDispatchToProps = ({
    fetchUsersList,
    registerUser
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(Registration);