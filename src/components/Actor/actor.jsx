import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';

const Actor = (props) => {
    const id = +props.match.params.id;
    const actor = props.actors.find(actor => actor.id === id);
    const goBack = useCallback(props.history.goBack, [props.history]);

    return (
        <React.Fragment>
            <i  className="fa fa-arrow-left" 
                onClick={goBack} 
                style={{cursor: 'pointer'}}
                ></i>
            <h1>{actor.name}</h1>
            <img src={actor.imgUrl} alt=""/>
            <p>{actor.biography}</p>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    actors: state.filmlistReducer.actors,
})
const withStore = connect(mapStateToProps);

export default compose(
    withStore
)(Actor);
