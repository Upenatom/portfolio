import{Route, Routes,Navigate} from 'react-router-dom'
import './App.css'
import {useState,useEffect,useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ThreeGallery from './pages/ThreeGallery/ThreeGallery'

export default function App() {


  
  // const changeStyle = () => {
  //   setStyle("close");
  // };
  // useEffect(() => {
  //   AOS.init();
  // }, [])



  const ele = document.getElementsByClassName('loading')


  
  useEffect(() => {
    if(ele) ele.outerHTML = ''
    }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/aboutme' element={ <About /> }/>
        <Route path='/3dgallery' element={<ThreeGallery/>}/>
        {/* <Route path='/3dgallery' element={<Twogallery/>}/> */}
        <Route path= '*' element={<Navigate to='/' replace/>}/>
        </Routes>
      {/* <nav style={{position:'abolute', height:50, width:'100%'}}>
        <ul style={{listStyleType:'none', display:"flex", justifyContent:"space-evenly"}}>
          <li>HOME</li>
          <li>ABOUT ME</li>
        </ul>
      </nav> */}
    

      {/* <div className={style}> */}
        {/* <div className='page1'>
          <h1><span style={{color: "yellow", fontSize:"125%"}}>Hello</span> Web Traveller!</h1>
          <h1>My name is <span style={{color: "blue", fontSize:"200%"}}>Randolph</span>. </h1>
          <h2>Welcome to my <span style={{color: "yellow", fontSize:"125%"}}>Portfolio Gallery!</span></h2>
          
        </div> */}

        {/* <div className="page2">
        
                    
        <div className="profilepic"/>
          
        
        <div className = "whoami">
          <h1 style={{color: "#0f2f5f"}}>Who I am and what I do</h1>
          <p>I am a full stack developer with a passion for developing functional and 
            practical products that improve the efficiency of processes and quality of life. 
            Capitalizing on my previous Engineering and Quality Control experience, I deliver 
            well rounded apps that satisfy the trifecta of functionality, UX, and UI design. 
            I thrive on knowing my products deliver on all the clients needs, and look forward 
            to opportunities to learn new and exciting technologies I can apply to my work.</p>
        </div>   
         
        </div> */}

        
        
        {/* <div className="page5">
          <h1>YOU ARE NOW READY.</h1> 
          <button onClick={changeStyle} ><h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="700">ENTER THE GALLERY</h1></button>
          
        </div> */}
      {/* </div> */}
      {/* <div className="spline">
        <Splinescene onMouseUp={onMouseUp}/>
      </div> */}
    </div>
  );
}
