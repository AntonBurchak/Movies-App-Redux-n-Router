import Registration from './component';
import { connect } from 'react-redux';
import { registerUser, fetchUsersList } from '../../core/actions'
import withTranslation from '../../hocs/withTranslation';

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

const words = [
    'app-register-title',
    'app-register-log-placeholder',
    'app-register-pass-placeholder',
    'app-register-button',
    'app-register-prompt',
    'app-register-reglink',
]

export default withTranslation(words)(withStore(Registration));