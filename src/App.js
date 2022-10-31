import{Route, Routes,Navigate} from 'react-router-dom'
import './App.css'
import {useState,useEffect,useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ThreeGallery from './pages/ThreeGallery/ThreeGallery'
import Intro from './pages/Intro/Intro'

export default function App() {

const[navShow, setNavShow]=useState(false)

const handleOnClick = ()=>{
  setNavShow(!navShow)
}



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home handleOnClick={handleOnClick} navShow={navShow} /> }/>
        <Route path='/aboutme' element={ <About handleOnClick={handleOnClick} navShow={navShow}/> }/>
        <Route path='/3dgallery' element={<ThreeGallery/>}/>
        <Route path='/intro' element={<Intro handleOnClick={handleOnClick} navShow={navShow}/>}/>
        {/* <Route path='/3dgallery' element={<Twogallery/>}/> */}
        <Route path= '*' element={<Navigate to='/' replace/>}/>
        </Routes>

    </div>
  );
}
