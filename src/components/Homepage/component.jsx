import React from 'react';

import Header from '../header'
import Sort from '../sort'
import FilmsList from '../films-list'
import SearchField from '.././search-field'

const Homepage = () => (
    <div className="app__list">
        <Header />
        <SearchField />
        <Sort />
        <FilmsList />
    </div>
)

export default Homepage;