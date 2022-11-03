import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../../Component/Nav/Nav'
import Burger from '../../Component/Burger/Burger'
import './Home.css'
export default function Home({ navShow, handleOnClick, handleClickOutside, winWidth }) {

    useEffect(() => {
        AOS.init();
    }, [])

    const navigate = useNavigate()

    const handleButtonClick = () => {
        if (winWidth < 600) {
            navigate('/2dgallery')
        } else
            navigate('/intro')
    }

    return (
        <div>
            <Burger className='burg' handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} winWidth={winWidth} /> : null}

            <div className='page1' onClick={() => handleClickOutside()}>
                <div className='myname'>
                    <h1 data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000"><span style={{ color: "yellow" }}>R</span>andolph </h1><h1 style={{ color: "blue" }} data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000" data-aos-delay="1000">Crasto. </h1>
                </div>
                <div className='description'>
                    <h3 data-aos="fade-in" data-aos-duration="250" data-aos-delay="500">Functional</h3>
                    <h4 data-aos="fade-in" data-aos-duration="100" data-aos-delay="750">.</h4>
                    <h4 data-aos="fade-in" data-aos-duration="100" data-aos-delay="1000">.</h4>
                    <h3 data-aos="fade-in" data-aos-duration="250" data-aos-delay="1500">Practical</h3>
                    <h4 data-aos="fade-in" data-aos-duration="100" data-aos-delay="1750">.</h4>
                    <h4 data-aos="fade-in" data-aos-duration="100" data-aos-delay="2000">.</h4>
                    <h3 data-aos="fade-in" data-aos-duration="250" data-aos-delay="2500">Effective</h3>
                    <h4 data-aos="fade-in" data-aos-duration="100" data-aos-delay="2750">.</h4>
                    <h4 data-aos="fade-in" data-aos-duration="100" data-aos-delay="3000">.</h4>
                    <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="3000">Apps</h2>
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
