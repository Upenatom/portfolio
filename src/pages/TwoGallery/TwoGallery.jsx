import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Burger from '../../Component/Burger/Burger'
import Nav from '../../Component/Nav/Nav'
import './TwoGallery.css'
export default function
    TwoGallery({ handleOnClick, handleClickOutside, navShow }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [descOpen, setDescOpen] = useState('greybackclosed')
    const [gitUrl, setGitUrl] = useState()
    const [projectUrl, setProjectUrl] = useState()

    useEffect(() => {
        AOS.init();
    }, [])


    const handleDivClick = (e) => {
        if (e.target.className === 'app-pic1') {
            setTitle('ROUTE TICKET')
            setContent(<p>Route Ticket was developed by the two member coding team: (awake ? code : caffeinate).<br /><br />This was our capstone project for General Assembly and one I'm extremely proud of.  This app was built from start to finish in 5 days!<br /><br />The app is a crowdsourcing app to connect city officials with their citizens.<br /><br />The user is able to report city infrastructure issues on a map, confirm that the issue is resolved and the ability to delete their own ticket should they choose to.<br /><br />This app is PACKED with features.It was created using the MERN stack with token authentication.The front end was created using react and was mainly written using REACT hooks.  The map tech used is leaflet maps.<br /><br />For this app I worked on all the map features, cluster feature, delete feature, route protections, gps locator, loading screen, and filters.  One of the coolest and most important feature is the ability or the user to click on a ticket and have the map autocenter and zoom on the location!<br /><br />Try it out and have fun flying around the map!</p>)
            setDescOpen('greyback')
            setGitUrl('https://github.com/Upenatom/pothole')
            setProjectUrl('https://route-ticket.herokuapp.com/home')

        }
        else if (e.target.className === 'app-pic2') {
            setTitle('THRIFTOLOGY')
            setContent(<p>Thriftology was created to give users a place
                to sell their pre-owned clothes.  This was the
                third General Assembly project and
                was completed in a group with three other
                individuals.<br /><br />

                This app was created using Django framework
                with an SQL database (PSQL).<br /><br />

                This app follows RESTful routing and Django
                class based views were used as much as
                possible to speed up the development of this
                app.<br /><br />

                This app was completed in 2 days after the
                idea and planning stage was completed.<br /><br />

                The app has Django authentication , Django
                admin, and has protected routes so only the
                user can delete or edit their own posts.<br /><br />

                In this app I worked on the edit and delete
                functionality, uploading and deleting photos
                to and from the AWS bucket via the app, the
                my thrifts page, and setting limits to how many
                photos could be uploaded by adding a limit on
                the frontend and backend.<br /><br />

                This app comes complete with filters and
                pagination as well!
            </p>)
            setDescOpen('greyback')
            setGitUrl('https://github.com/Upenatom/thriftology')
            setProjectUrl('https://thriftologysei.herokuapp.com/')
        }
        else if (e.target.className === 'app-pic3') {
            setTitle('GO BANANAS!!!!')
            setDescOpen('greyback')
            setContent(<p>GO BANANAS was created for my first project at General
                Assembly.<br /><br />

                This project uses regular DOM manipulation to display the
                results of the game logic using the model, view, controller
                methodology.  Styling is done using CSS only.  The game
                pulls words from a hard coded library of categories and
                related words.<br /><br />

                Each player takes turns clicking the spin button triggering a
                spin animation on the spinner to determine how many
                points their guess is worth.  The game logic adds the points
                to the players total if their selected letter is correct.

                This game is a best of 3 rounds and at the end of the game
                a win screen is displayed and the players are asked if they
                would like to play again.<br /><br />

                I hope you have as much fun playing this game as I did
                creating it.


            </p>)
            setDescOpen('greyback')
            setGitUrl('https://github.com/Upenatom/gobananasgame')
            setProjectUrl('https://upenatom.github.io/gobananasgame/')

        }
        else if (e.target.className === 'app-pic4') {
            setTitle("SADIE'S MAYDAY REPAIR")
            setDescOpen('greyback')
            setContent(<p>Sadie's Mayday Repair was my first full stack app.  At
                it's core, this app is a scheduling app that uses the
                MEN stack for full CRUD operations.  The app was
                initially created to give a business owner and friend
                an online presence for their business.<br /><br />

                The app uses google Oauth for authentication, and has
                a custom builtadmin feature where only the business
                owner can view all appointments, can delete, and write
                comments that are visible to only the business owner for
                each appointment .  This is achieved via protecting routes
                using conditional if statements based on who the logged
                in user is. <br /><br />

                Customers can create cars, appointments and edit/delete
                appointments and cars if they need to.  They are able to
                select the dates for the appointments with a date picker and
                there is front end protection to make sure that all the
                necessary fields are filled out.<br /><br />

                This app also follows RESTful routing.
            </p>)
            setDescOpen('greyback')
            setGitUrl('https://github.com/Upenatom/appointment-scheduler')
            setProjectUrl('https://sadie-repair.herokuapp.com/')

        }
        else if (e.target.className === 'closebutton' || e.target.className === 'greyback') {

            setDescOpen('greybackclosed')

        }
    }

    return (
        <div className='twogallery' >
            <Burger className='burg' handleOnClick={handleOnClick} />
            {navShow ? <Nav handleOnClick={handleOnClick} /> : null}
            <div className='thegallery' onClick={() => handleClickOutside()}>
                <div className='app-pic1' onClick={handleDivClick}>
                    <p>ROUTE TICKET</p>
                </div>
                <div className='app-pic2' onClick={handleDivClick} >
                    <p>THRIFTOLOGY</p>
                </div>
                <div className='app-pic3' onClick={handleDivClick} ></div>
                <div className='tag-3' >
                    <p>GO BANANAS !!!!</p></div>
                <div className='app-pic4' onClick={handleDivClick} ></div>
                <div className='tag-4' >
                    <p>SADIE'S MAYDAY REPAIR</p></div>
                <div className='page-title'><h1>THE GALLERY</h1></div>
            </div>

            <div className={descOpen} onClick={handleDivClick}>


                <div className='overlaydesc'>
                    <div className='closebutton' onClick={handleDivClick}>X</div>
                    <h1>{title}</h1>
                    {content}
                    <a href={gitUrl} target="_blank" rel="noopener noreferrer"><button >Github</button></a> <a href={projectUrl} target="_blank" rel="noopener noreferrer"><button >Experience {title}</button></a>

                </div>
            </div>

        </div >

    )
}
