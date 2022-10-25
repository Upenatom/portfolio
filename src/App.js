import Splinescene from "./Component/Spline/Spline";
import './App.css'
import {useEffect, useState, Suspence} from 'react'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoading = () => { setLoading(false) }

  return (
    <div className="App">
      
    <div className="loader"> <h1>Hi!  Welcome to my portfolio!
      Once my portfolio is loaded have a look at it you can use the WASD keys to move around.</h1>
      {loading?<h2>LOADING</h2>:<button>Enter the Gallery</button>}</div>
   <div className="spline">    
        <Splinescene handleLoading={handleLoading} />
       
      </div>
  
    </div>
  );
}
