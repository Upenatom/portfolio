import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './ThreeGallery.css'
import Spline from '../../Component/Spline/Spline'

export default function ThreeGallery() {
    const [load, setLoad] = useState('loader')

    const navigate = useNavigate()


    const onMouseUp = (e) => {
        // console.log(e.target.name)
        if (e.target.name === 'house') {
            navigate('/')
        }
        // else if (e.target.name === 'Me') {
        //     navigate('/aboutme')
        // }

    }

    const onLoad = () => {
        setLoad('noloader')
    }




    return (
        <div className='threegallery'>
            <div className={load}> <h1>LOADING</h1> </div>
            <Spline onLoad={onLoad} onMouseUp={onMouseUp} />

        </div>
    )
}
