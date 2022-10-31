import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import Intros from '../../Component/Introscene/Introscene'
import Burger from '../../Component/Burger/Burger'
import Speech from '../../Component/Speech/Speech'
import Nav from '../../Component/Nav/Nav'

export default function Intro({ handleOnClick, navShow }) {
    const divobj = useRef()

    const navigate = useNavigate()


    const onWheel = (e) => {
        if (e.deltaY < 0) {
            divobj.current.scrollTop -= 50
        }
        else if (e.deltaY > 0) {
            divobj.current.scrollTop += 50
        }
    }

    const onMouseUp = (e) => {
        if (e.target.name === 'controller') {
            navigate('/3dgallery')
        } else if (e.target.name === 'phone') {
            navigate('/')
        }

    }




    return (
        <>
            <Burger handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} /> : null}
            <Speech divobj={divobj} />
            <Intros onWheel={onWheel} onMouseUp={onMouseUp} />

        </>

    )
}
