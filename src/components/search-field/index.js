import SearchField from './SearchField';
import { connect } from 'react-redux'
import { searchByText } from '../../core/actions';

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})

const mapDispatchToProps = ({
    searchByText
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(SearchField);