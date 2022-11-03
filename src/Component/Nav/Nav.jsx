import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
export default function ({ handleOnClick, winWidth }) {
    return (
        <div className='navopen'>
            <Link className='links' to='/' onClick={() => handleOnClick()}>HOME</Link>
            {winWidth < 600 ? null :
                <Link className='links' to='/3dgallery' onClick={() => handleOnClick()}>3D GALLERY</Link>}


            <Link className='links ' to='/2dgallery' onClick={() => handleOnClick()}>{winWidth < 600 ? 'GALLERY' : '2D GALLERY'}</Link>
            <Link className='links ' to='/aboutme' onClick={() => handleOnClick()}>ABOUT ME</Link>
        </div>
    )
}
