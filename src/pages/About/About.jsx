import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../../Component/Nav/Nav'
import Burger from '../../Component/Burger/Burger'
import Picture from '../../Component/Picture/Picture'
import Scroll from '../../Component/Scroll/Scroll'
import './About.css'
export default function About({ handleOnClick, navShow, handleClickOutside }) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='aboutpage'>
            <Burger className='burg' handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} /> : null}
            <div onClick={() => handleClickOutside()}>
                <div className='aboutme' >
                    <Picture />
                    <div className='whoami'>
                        <h1 style={{ color: "#0f2f5f" }} > Who I am and what I do</h1>
                        <p data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="2000">My name is Randolph. I am a full stack developer with a passion for developing functional and
                            practical products that improve the efficiency of processes and quality of life.
                            Capitalizing on my previous Engineering and Quality Control experience, I deliver
                            well rounded apps that satisfy the trifecta of functionality, UX, and UI design.
                            I thrive on knowing my products deliver on all the clients needs, and look forward
                            to opportunities to learn new and exciting technologies I can apply to my work.</p>
                    </div>
                </div>
                <Scroll />
                <div className='myskills'>

                    <div className='skillstext'>
                        <div className='skillsborder'>
                            <h1 >Skills I deliver</h1>
                            <p>REACT | MongoDB | Javascript | Python | Django | Express | SQL | Git | HTML | CSS | Mongoose | Node | MERN stack | MEN stack | RESTful | Spline |</p>
                        </div>
                    </div>
                    <div className='logos'>
                        <div className='logo1'></div>
                        <div className='logo2'></div>
                        <div className='logo3'></div>
                        <div className='logo4'></div>
                        <div className='logo5'></div>
                        <div className='logo6'></div>
                        <div className='logo7'></div>
                        <div className='logo8'></div>
                    </div>
                </div>


            </div>
        </div >
    )
}
