import React from 'react';

class Sort extends React.Component {

  render() {
    const { sortBy, resetSorting } = this.props;

    return (
      <div className="app__sort">
        <h4>Sort movies</h4>
        <button onClick={() => sortBy('likes')}>by likes</button>
        <button onClick={() => sortBy('stars')}>by rating</button>
        <button onClick={resetSorting}>reset</button>
      </div>
    )
  }
}

export default Sort;