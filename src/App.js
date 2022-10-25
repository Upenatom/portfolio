import Splinescene from "./Component/Spline/Spline";
import './App.css'

export default function App() {


  return (
    <div className="App">
      <div className="loader">
        <div className='page1'>
          <h1>Hello web traveller! I am Randolph Crasto.</h1>
          <h1>Welcome to my portfolio site!</h1>
          <h2>Who Am I?</h2>
          <p>I am a full stack developer with a passion for developing functional and 
            practical products that improve the efficiency of processes and quality of life. 
            Capitalizing on my previous Engineering and Quality Control experience, I deliver 
            well rounded apps that satisfy the trifecta of functionality, UX, and UI design. 
            I thrive on knowing my products deliver on all the clients needs, and look forward 
            to opportunities to learn new and exciting technologies I can apply to my work.</p>
        </div>
        <div className="page2">
          <h2>This won't be like anyother portfolio website you've seen before!</h2>
          <h2>First we must prepare you by downloading your conciousness into an web recognizable form!!</h2>
        </div>
        <div className="page3">
          <h1>..A BANANA MEME</h1>
          
        </div>
        <div className="page4">
          <h1>YOU ARE NOW READY TO ENTER THE GALLERY!</h1>
          <button>Enter THE GALLERY</button>
        </div>
      </div>
      <div className="spline">
        <Splinescene/>
      </div>
    </div>
  );
}
