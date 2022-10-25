import Splinescene from "./Component/Spline/Spline";
import './App.css'
import {useEffect, useState, Suspence} from 'react'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoading = () => { setLoading(false) }
  return (
    <div className="App">
    <div className="loader"></div>
   <div className="spline">
    
        <Splinescene handleLoading={handleLoading} />
       
      </div>
  
    </div>
  );
}
