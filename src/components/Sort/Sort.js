import React from 'react';

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

export default Sort;