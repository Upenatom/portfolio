import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './ThreeGallery.css'
import Spline from '../../Component/Spline/Spline'

export default function ThreeGallery() {
    const [load, setLoad] = useState('loader')

    const navigate = useNavigate()


    const onMouseUp = (e) => {
        if (e.target.name === 'tophat') {
            navigate('/')
        }

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
