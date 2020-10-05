import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import { searchByText } from '../../core/actions';
import { compose } from 'redux';
import translation from '../../hocs/translation';

const SearchField = (props) => {
    const search = useCallback((e) => {
        props.searchByText(e.target.value)
    }, [])

    return (
        <div className="app__search">
            <input type="text" onInput={search} placeholder={props['app-search-placeholder']} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})

const mapDispatchToProps = { searchByText };
const withStore = connect(mapStateToProps, mapDispatchToProps)
const withTranslation = translation([
    'app-search-placeholder'
])
// export default withTranslation((withStore(SearchField)));
export default compose(
    withTranslation,
    withStore
)(SearchField);
