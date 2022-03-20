import React from 'react'
import {Link} from 'react-router-dom'
const Menu=()=>
{
    return (
        <>
        <Link activeClassName="active_class" to="/">Home</Link>
        <Link activeClassName="active_class" to="/about">About</Link>
        </>

    )
}
export default Menu;