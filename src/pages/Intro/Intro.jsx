import { useState, useRef } from 'react'
import Intros from '../../Component/Introscene/Introscene'
import Burger from '../../Component/Burger/Burger'
import Speech from '../../Component/Speech/Speech'

export default function Intro() {
    const divobj = useRef()

    // const [theDiv, setTheDiv] = useState()

    // const getterfunc = (y) => { setTheDiv(y) }

    const onWheel = (e) => {
        console.log(e.deltaY)
        console.log(divobj.current.scrollTop)


        if (e.deltaY < 0) {
            divobj.current.scrollTop -= 50
        }
        else if (e.deltaY > 0) {
            divobj.current.scrollTop += 50
        }
    }




    return (
        <>

            <Speech divobj={divobj} />
            <Burger />
            <Intros onWheel={onWheel} />

        </>
    )
}
