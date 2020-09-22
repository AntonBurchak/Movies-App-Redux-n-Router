import { Actor } from './component';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    actors: state.filmlistReducer.actors,
})

const withStore = connect(
    mapStateToProps
)

export default withStore(Actor);