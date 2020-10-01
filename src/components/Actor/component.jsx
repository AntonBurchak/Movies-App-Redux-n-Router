import React, { useCallback } from 'react';

const Actor = (props) => {
    const id = +props.match.params.id;
    const actor = props.actors.find(actor => actor.id === id);

    const goBack = useCallback(props.history.goBack, [props.history])

    return (
        <React.Fragment>
            <i className="fa fa-arrow-left" onClick={goBack} style={{cursor: 'pointer'}}></i>
            <h1>{actor.name}</h1>
            <img src={actor.imgUrl} alt=""/>
            <p>{actor.biography}</p>
        </React.Fragment>
    )
}

export default Actor;