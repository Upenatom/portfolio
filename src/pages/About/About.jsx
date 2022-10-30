import { Link } from 'react-router-dom'
import Nav from '../../Component/Nav/Nav'
import Burger from '../../Component/Burger/Burger'
import Picture from '../../Component/Picture/Picture'
import './About.css'
export default function About({ handleOnClick, navShow }) {
    return (
        <div onClick={() => handleOnClick()}>
            <Burger className='burg' handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} /> : null}
            <Picture />
            <h1 style={{ color: "#0f2f5f" }}>Who I am and what I do</h1>
            <p>I am a full stack developer with a passion for developing functional and
                practical products that improve the efficiency of processes and quality of life.
                Capitalizing on my previous Engineering and Quality Control experience, I deliver
                well rounded apps that satisfy the trifecta of functionality, UX, and UI design.
                I thrive on knowing my products deliver on all the clients needs, and look forward
                to opportunities to learn new and exciting technologies I can apply to my work.</p>
        </div>
    )
}
