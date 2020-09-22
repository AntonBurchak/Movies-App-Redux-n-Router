import Sort from './Sort'
import { connect } from 'react-redux';
import { sortBy, resetSorting } from '../../core/actions';

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})

const mapDispatchToProps = ({
    sortBy,
    resetSorting
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(Sort);
