import Sort from './Sort'
import { connect } from 'react-redux';
import { sortBy, resetSorting } from '../../core/actions';
import withTranslation from '../../hocs/withTranslation';

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

const words = [
    'app-homepage-sort',
    'app-homepage-sort-likes',
    'app-homepage-sort-rating',
    'app-homepage-sort-reset',
]

export default withTranslation(words)(withStore(Sort));



