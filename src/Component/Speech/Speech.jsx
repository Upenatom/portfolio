import React, { useRef, useEffect } from "react";
import './Speech.css'


export default function Speech({ divobj }) {

    return (
        <div>
            <div className='speech' ref={divobj}>
                <section className='first'>Hello! Don't be alarmed, I've brought you here to offer you a choice.</section>
                <section className='second'>Oh really? What's my choice?</section>
                <div className='flex-row'>
                    <section className='third'>Click the <b style={{ color: 'yellow' }}>game controller</b> and you will experience a new way to browse the portfolio gallery!</section>
                    <br />
                    <section className='third'> Click the <b style={{ color: 'red' }}>phone</b> and you will go back to a normal gallery browsing experience. </section>
                </div>
            </div>
            {/* <div className="scroll">

                <span className="m_scroll_arrows one"></span>
                <span className="m_scroll_arrows two"></span>
                <span className="m_scroll_arrows three"></span><br />
                <span className="scrolltext">SCROLL</span>

            </div> */}
        </div>
    )
}
