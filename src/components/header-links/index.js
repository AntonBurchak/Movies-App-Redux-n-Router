import HeaderLinks from './HeaderLinks';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isLogged: state.filmlistReducer.isLogged
})

const withStore = connect(
    mapStateToProps
)

export default withStore(HeaderLinks);