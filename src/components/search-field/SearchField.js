import React, { useCallback } from 'react';

const SearchField = (props) => {
    const search = useCallback((e) => {
        props.searchByText(e.target.value)
    }, [])

    return (
        <div className="app__search">
            <input type="text" onInput={search} placeholder={props['app-search-placeholder']} />
        </div>
    )
}

export default SearchField;