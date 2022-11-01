import React, { useRef, useEffect } from "react";
import './Speech.css'


export default function Speech({ divobj }) {

    return (
        <div>
            <div className='speech' ref={divobj}>
                <section className='first'>I've re-directed you here to offer you a choice.</section>
                <section className='second'>Oh really? What's my choice?</section>
                <div className='flex-row'>
                    <section className='third'>Click the <b style={{ color: 'yellow' }}>game controller</b> and experience a new way of browsing a portfolio gallery.</section>
                    <br />
                    <section className='third'> Click the <b style={{ color: 'red' }}>phone</b> go back to a normal gallery browsing experience. </section>
                </div>
            </div>

        </div>
    )
}
