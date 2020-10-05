import React from 'react';
import { connect } from 'react-redux';
import { sortBy, resetSorting } from '../../core/actions';
import { compose } from 'redux';
import translation from '../../hocs/translation';

const Sort = (props) => (
  <div className="app__sort">
    <h4>{props["app-homepage-sort"]}</h4>

    <button onClick={() => props.sortBy('likes')}>
      {props["app-homepage-sort-likes"]}
    </button>

    <button onClick={() => props.sortBy('stars')}>
      {props["app-homepage-sort-rating"]}
    </button>

    <button onClick={props.resetSorting}>
      {props["app-homepage-sort-reset"]}
    </button>
  </div>
)

const mapStateToProps = (state) => ({
  films: state.filmlistReducer.films
})
const mapDispatchToProps = { sortBy, resetSorting };
const withStore = connect(mapStateToProps, mapDispatchToProps);
const withTranslation = translation([
  'app-homepage-sort',
  'app-homepage-sort-likes',
  'app-homepage-sort-rating',
  'app-homepage-sort-reset',
])

// export default withTranslation(withStore(Sort));
export default compose(
  withTranslation,
  withStore
)(Sort)

