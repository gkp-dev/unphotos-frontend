import React from 'react'
import HeaderTop from './helpers/Header-Top'
import Nav from './helpers/Nav'

function Header({ onSearch }) {
    return (
        <header>
            <HeaderTop search={onSearch}/>
            <Nav />
        </header>
    )
}

export default Header
