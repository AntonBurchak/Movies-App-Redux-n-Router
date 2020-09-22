import React from 'react';
import Film from '../Film/'
import './films.scss'

class FilmsList extends React.Component {
    componentDidMount() {
        const {getFilmsList} = this.props;
        getFilmsList();
    }

    render () {
        const { films } = this.props;
        
        return (
            <div className="app__films">
                {films.map((film, index) => {
                    return (
                        <Film key={index} film={film}/>
                    )
                })}
            </div>
        )
    }

}

export default FilmsList;