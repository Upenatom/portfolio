import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
export default function ({ handleOnClick }) {
    return (
        <div className='navopen'>
            <Link className='links' to='/' onClick={() => handleOnClick()}>HOME</Link>
            <Link className='links' to='/3dgallery' onClick={() => handleOnClick()}>3D GALLERY</Link>
            <Link className='links ' to='/2dgallery' onClick={() => handleOnClick()}>2D GALLERY</Link>
            <Link className='links ' to='/aboutme' onClick={() => handleOnClick()}>ABOUT ME</Link>
        </div>
    )
}
