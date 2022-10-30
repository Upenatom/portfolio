import { Link, NavLink } from 'react-router-dom'
import Nav from '../../Component/Nav/Nav'
import Burger from '../../Component/Burger/Burger'
import './Home.css'
export default function Home({ navShow, handleOnClick }) {

    return (
        <div onClick={() => handleOnClick()}>
            <Burger className='burg' handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} /> : null}

            <div className='page1'>
                <h1><span style={{ color: "yellow", fontSize: "125%" }}>Hello</span> Web Traveller!</h1>
                <h1>My name is <span style={{ color: "blue", fontSize: "200%" }}>Randolph</span>. </h1>
                <h2>Welcome to my <span style={{ color: "yellow", fontSize: "125%" }}>Portfolio Gallery!</span></h2>
            </div>
            <div className="page5">
                <h1>YOU ARE NOW READY.</h1>
                <button><h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="700">ENTER THE GALLERY</h1></button>
            </div>
        </div >
    )
}
