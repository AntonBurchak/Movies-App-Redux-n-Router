import { HeaderLinks } from './HeaderLinks';
import { connect } from 'react-redux'
import { setLogged } from '../../core/actions'

const mapStateToProps = (state) => ({
    isLogged: state.filmlistReducer.isLogged
})

const mapDispatchToProps = ({
    setLogged
});

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(HeaderLinks);