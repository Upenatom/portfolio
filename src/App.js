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
          <div className='scrollDown'/>
        </div>

        <div className="page2">
        <div className="flex-row">
                    
        <div className="profilepic" data-aos="fade-right"/>
          
        <div className="flex-column" data-aos="fade-left">
        <div className = "whoami">
            <h1 style={{color: "Purple"}}>Who Am I?</h1>
          <p>I am a full stack developer with a passion for developing functional and 
            practical products that improve the efficiency of processes and quality of life. 
            Capitalizing on my previous Engineering and Quality Control experience, I deliver 
            well rounded apps that satisfy the trifecta of functionality, UX, and UI design. 
            I thrive on knowing my products deliver on all the clients needs, and look forward 
            to opportunities to learn new and exciting technologies I can apply to my work.</p>
        </div>
        
            </div>
            </div>
          <div className='scrollDown'/>
        </div>

        <div className="page3">
        <h2 data-aos="fade-down-right"
            data-aos-duration="1000">This will <span style={{textDecoration: "underline"}}>not</span> be a standard portfolio experience.</h2>
        <h2 data-aos="fade-up-left"
        data-aos-duration="1000">You must merge with the most <span style={{color: "red"}}>POWERFUL</span> entity on the web to continue...</h2>
        <div className='integrate'> <h1>MERGING...</h1></div>
        
        <div className='scrollDown'/>
        
        </div>
        <div className="page4">

          <div className="flex-row">

         
          <Meme className="meme"/>
          
          
          <div className="flex-column-center">
          <h2 data-aos="fade-up"
              data-aos-duration="3000" data-aos-delay="1200">...THE INTERNET MEME</h2>
            <h2 className="integrate">MERGE COMPLETE</h2>
              </div>
          </div>
          <div className='scrollDown'/>
        </div>
        <div className="page5">
          <h1 data-aos="fade-in" data-aos-duration="3000" data-aos-delay="500">YOU ARE NOW READY.</h1> 
          <button onClick={changeStyle} ><h1 data-aos="fade-in" data-aos-duration="3000" data-aos-delay="700">ENTER THE GALLERY</h1></button>
          
        </div>
      </div>
      <div className="spline">
        <Splinescene/>
      </div>
    </div>
  );
}
