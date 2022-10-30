import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
export default function ({ handleOnClick }) {
    return (
        <div className='navopen'>
            <NavLink to='/' onClick={() => handleOnClick()}>HOME</NavLink>
            <NavLink to='/3dgallery' onClick={() => handleOnClick()}>3D GALLERY</NavLink>
            <NavLink to='/aboutme' onClick={() => handleOnClick()}>ABOUT ME</NavLink>
        </div>
    )
}
