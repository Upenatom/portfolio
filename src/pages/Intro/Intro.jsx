import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import Intros from '../../Component/Introscene/Introscene'
import Burger from '../../Component/Burger/Burger'
import Speech from '../../Component/Speech/Speech'
import Scroll from '../../Component/Scroll/Scroll'
import Nav from '../../Component/Nav/Nav'

export default function Intro({ handleOnClick, navShow, handleClickOutside }) {
    const [load, setLoad] = useState('loader')
    const [endScroll, setendScroll] = useState(false)

    const divobj = useRef()

    const navigate = useNavigate()


    const onWheel = (e) => {

        if (e.deltaY < 0) {
            divobj.current.scrollTop -= 50
        }
        else if (e.deltaY > 0) {
            divobj.current.scrollTop += 50
        }

        if (divobj.current.scrollTop > 970) {
            setendScroll(true)
        } else setendScroll(false)

    }

    const onMouseUp = (e) => {
        if (e.target.name === 'controller') {
            navigate('/3dgallery')
        } else if (e.target.name === 'phone') {
            navigate('/2dgallery')
        }

    }
    const onLoad = () => {
        const delayInMilliseconds = 2000
        setTimeout(function () {
            setLoad('noloader')

        }, delayInMilliseconds);
    }






    return (
        <>
            <div className={load}> <h1 className='text-glitch'>BROWSER HI-JACK COMPLETED</h1> <h1 className='text-glitch'><br /><br /><br /><br /><br /><br />...RE-ROUTING</h1></div>
            <Burger handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} /> : null}
            <Speech divobj={divobj} />
            <Intros onWheel={onWheel} onMouseUp={onMouseUp} handleClickOutside={handleClickOutside} onLoad={onLoad} />
            {endScroll ? null : <Scroll />}

        </>

    )
}
