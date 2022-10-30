import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
export default function () {
    return (
        <div className='nav'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/3dgallery'>3D GALLERY</NavLink>
            <NavLink to='/aboutme'>ABOUT ME</NavLink>
        </div>
    )
}
