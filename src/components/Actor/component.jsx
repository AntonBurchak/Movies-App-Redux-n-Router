import React from 'react';

export const Actor = (props) => {

    const id = +props.match.params.id;
    const { actors } = props;
    const actor = actors.find(actor => actor.id === id);

    const goBack = () => {
        props.history.goBack()
    }

    return (
        <React.Fragment>
            <i className="fa fa-arrow-left" onClick={goBack} style={{cursor: 'pointer'}}></i>
            <h1>{actor.name}</h1>
            <img src={actor.imgUrl} alt=""/>
            <p>{actor.biography}</p>
        </React.Fragment>
    )
}