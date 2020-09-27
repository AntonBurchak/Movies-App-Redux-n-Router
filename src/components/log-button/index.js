import LogButton from './component'
import { connect } from 'react-redux'
import { logOutUser } from '../../core/actions'

const mapStateToProps = (state) => ({
    isLogged: state.usersReducer.isLogged
})

const mapDispatchToProps = ({
    logOutUser
});

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(LogButton);