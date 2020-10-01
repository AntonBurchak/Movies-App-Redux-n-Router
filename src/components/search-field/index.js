import SearchField from './SearchField';
import { connect } from 'react-redux'
import { searchByText } from '../../core/actions';
import withTranslation from '../../hocs/withTranslation';

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

const words = [
    'app-search-placeholder'
];

export default withTranslation(words)(withStore(SearchField));