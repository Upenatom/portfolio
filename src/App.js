import Splinescene from "./Component/Spline/Spline";
import Meme from "./Component/Meme/Meme";
import './App.css'
import {useState,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  const [style, setStyle] = useState("loader");
  
  const changeStyle = () => {
    setStyle("close");
  };
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="App">
      <div className={style}>
        <div className='page1'>
          <h1><span style={{color: "yellow", fontSize:"125%"}}>Hello</span> Web Traveller!</h1>
          <h1>My name is <span style={{color: "blue", fontSize:"200%"}}>Randolph</span>. </h1>
          <h2>Welcome to my <span style={{color: "yellow", fontSize:"125%"}}>Portfolio Gallery!</span></h2>
          
        </div>

        <div className="page2">
        
                    
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
         
        </div>

        <div className="page3">
        <h2 data-aos="fade-in"
            data-aos-duration="1000">This will be a unique portfolio experience.</h2>
        <h2 data-aos="fade-in"
        data-aos-duration="1000">Before we enter, we need to merge with the most <span style={{color: "red"}}>POWERFUL</span> entity on the web...</h2>
        <div className='integrate'> <h1>MERGING...</h1></div>
        
        
        
        </div>
        <div className="page4">

          <div className="flex-row">

         <div className="meme">
          <Meme />
          </div>
          
          <div className="flex-column-center">
          <h2 data-aos="fade-in"
              data-aos-delay="1000">...THE INTERNET MEME</h2>
            <h2 className="integrate">MERGE COMPLETE</h2>
              </div>
          </div>
          
        </div>
        <div className="page5">
          <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">YOU ARE NOW READY.</h1> 
          <button onClick={changeStyle} ><h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="700">ENTER THE GALLERY</h1></button>
          
        </div>
      </div>
      <div className="spline">
        <Splinescene/>
      </div>
    </div>
  );
}
