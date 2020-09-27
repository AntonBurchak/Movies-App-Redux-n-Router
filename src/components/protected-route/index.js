import { connect } from 'react-redux';
import ProtectedRoute from './component';

const mapStateToProps = (state) => ({
    isLogged: state.usersReducer.isLogged,
})

const withStore = connect(
    mapStateToProps
)

export default withStore(ProtectedRoute);