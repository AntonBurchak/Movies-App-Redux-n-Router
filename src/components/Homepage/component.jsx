import React from 'react';

import Header from '.././Header'
import Sort from '.././Sort'
import FilmsList from '.././FilmsList'
import SearchField from '.././SearchField'

export const Homepage = () => {
    return (
        <div className="app__list">
            <Header />
            <SearchField />
            <Sort />
            <FilmsList />
        </div>
    )
}