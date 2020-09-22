import Registration from './component';
import { connect } from 'react-redux';
import { setLogged } from '../../core/actions'

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})
const mapDispatchToProps = ({
    setLogged
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(Registration);