import React, { useRef, useEffect } from "react";
import './Speech.css'


export default function Speech({ divobj }) {

    // const divobj = useRef()



    // useEffect(() => { getterfunc(divobj) }, [])






    return (
        <div>
            <div className='speech' ref={divobj}>
                <section className='first'>Hello Web Traveller.<br /> Don't be alarmed. <br /> I brought you here to give you a choice</section>
                <section className='second'>Oh cool. What's my choices?</section>
                <div className='flex-row'>
                    <section className='third'> Pick up the phone and you will go back to your normal gallery browsing experience. </section><br /><section className='third'>Pick up the the <b style={{ color: 'yellow' }}>game controller</b> and I show you a new way of experiencing web browsing!</section>
                </div>
            </div>
            <div className="scroll">

                <span className="m_scroll_arrows one"></span>
                <span className="m_scroll_arrows two"></span>
                <span className="m_scroll_arrows three"></span>
                <span className="scrolltext">scroll</span>

            </div>
        </div>
    )
}
