import { useNavigate } from 'react-router-dom'

import Nav from '../../Component/Nav/Nav'
import Burger from '../../Component/Burger/Burger'
import './Home.css'
export default function Home({ navShow, handleOnClick, handleClickOutside }) {

    const toIntro = useNavigate()

    const handleButtonClick = () => {

        toIntro('./intro')
    }

    return (
        <div>
            <Burger className='burg' handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} /> : null}

            <div className='page1' onClick={() => handleClickOutside()}>
                <div className='myname'>
                    <h1><span style={{ color: "yellow" }}>R</span>andolph </h1><h1 style={{ color: "blue" }}>Crasto. </h1>
                </div>
                <div className='description'>
                    <h3>Functional</h3>
                    <h4>.</h4>
                    <h4>.</h4>
                    <h3>Practical</h3>
                    <h4>.</h4>
                    <h4>.</h4>
                    <h3>Effective</h3>
                    <h4>.</h4>
                    <h4>.</h4>
                    <h2>Apps</h2>
                </div>
                <div className='enter'>
                    <button onClick={() => handleButtonClick()}><h3 >ENTER THE GALLERY</h3></button>
                </div>
                <div className='stamp-container'>
                    <div className='stamp'>
                        FULL STACK
                    </div>
                </div>
            </div>

        </div >
    )
}
