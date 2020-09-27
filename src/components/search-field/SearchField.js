import React from 'react';

const SearchField = (props) => {
    const search = (e) => {
        props.searchByText(e.target.value)
    }

    return (
        <div className="app__search">
            <input type="text" onInput={search} placeholder="Введите название фильма" />
        </div>
    )
}

export default SearchField;