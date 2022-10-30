import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function DropDown() {
    return (
        <div className='dropdown'>
            <NavLink to='/3dgallery'>3D GALLERY</NavLink>
            <NavLink to='/2dgallery'>2D GALLERY</NavLink>
        </div>
    )
}
