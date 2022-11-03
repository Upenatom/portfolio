import MobileScene from '../../Component/Mobilescene/Mobilescene'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MobileGallery.css'

export default function MobileGallery() {
    const roller = useRef();
    const navigate = useNavigate();

    const onLoad = (spline) => {
        const storeroller = spline.findObjectByName('roller')
        roller.current = storeroller

    }

    const onMouseUp = (e) => {
        console.log(e.target.name)
        if (e.target.name === 'uparrow') {
            roller.current.rotation.x += Math.PI / 180 * 22.5
        } else if (e.target.name === 'downarrow') {
            roller.current.rotation.x -= Math.PI / 180 * 22.5
        } else if (e.target.name === 'house') {
            navigate('/')
        }
    }





    return (
        <div className='mobilegallery'><MobileScene onLoad={onLoad}
            onMouseUp={onMouseUp}
        /></div>
    )
}
