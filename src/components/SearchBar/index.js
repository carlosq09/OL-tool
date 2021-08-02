import React from 'react'
//styles
import './index.scss'

const SEARCH_ICON = "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png"

const SearchBar = ({ onSearch }) => {

    return <div className="searchBar" >
        <input autoComplete="off"
            className="searchBar__input"
            name='search'
            placeholder="Search"
            type='text' onChange={(e) => onSearch(e.target.value)}
        />
        <div className="searchBar__separator" />
        <img className="searchBar__icon" src={SEARCH_ICON} />
    </div >
}

export default SearchBar