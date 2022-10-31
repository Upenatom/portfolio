import React, { useRef, useEffect } from "react";
import './Speech.css'


export default function Speech({ divobj }) {

    // const divobj = useRef()



    // useEffect(() => { getterfunc(divobj) }, [])






    return (
        <div className='speech' ref={divobj}>
            <section className='first'>Hello Web Traveller.<br />  I'm sure you have a lot of questions about what's happening and why you are here.</section>
            <section className='first'>Hello Web Traveller.<br />  I'm sure you have a lot of questions about what's happening and why you are here.</section>
            <section className='first'>Hello Web Traveller.<br />  I'm sure you have a lot of questions about what's happening and why you are here.</section>
        </div>
    )
}
