import React from 'react';
import IconSearch from './IconSearch';

export default function Search() {
    return (
        <div>
            <form action="/search.html" method="get">
                <div className="header-search">
                    <IconSearch></IconSearch>
                    <input className="header-search__input" type="text" placeholder="Search articles here ..." aria-label="Search" name="query" />
                </div>
            </form>
        </div>
    )
}
