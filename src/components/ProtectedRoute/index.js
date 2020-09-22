import { connect } from 'react-redux';
import { ProtectedRoute } from './component';

const mapStateToProps = (state) => ({
    isLogged: state.filmlistReducer.isLogged,
})

const withStore = connect(
    mapStateToProps
)

export default withStore(ProtectedRoute);