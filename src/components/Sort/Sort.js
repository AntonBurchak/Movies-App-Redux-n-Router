import React from 'react';

const Sort = (props) => (
  <div className="app__sort">
    <h4>Sort movies</h4>
    <button onClick={() => props.sortBy('likes')}>by likes</button>
    <button onClick={() => props.sortBy('stars')}>by rating</button>
    <button onClick={props.resetSorting}>reset</button>
  </div>
)

export default Sort;