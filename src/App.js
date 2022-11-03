import{Route, Routes,Navigate} from 'react-router-dom'
import './App.css'
import {useState,useEffect} from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ThreeGallery from './pages/ThreeGallery/ThreeGallery'
import TwoGallery from './pages/TwoGallery/TwoGallery'
import Intro from './pages/Intro/Intro'
import MobileGallery from './pages/MobileGallery/MobileGallery'

export default function App() {

const[navShow, setNavShow]=useState(false)

const handleOnClick = ()=>{
  setNavShow(!navShow)
}
const handleClickOutside = ()=>{
  setNavShow(false)
  
}
const [winWidth, setWinWidth] = useState(window.innerWidth);
const getWidth = () => { setWinWidth(window.innerWidth) }
useEffect(() => {
  window.addEventListener('resize', getWidth)
  console.log(winWidth)
  return window.removeEventListener('resize', getWidth)
}, [winWidth])



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home handleOnClick={handleOnClick} navShow={navShow} handleClickOutside={handleClickOutside} winWidth={winWidth}/> }/>
        <Route path='/aboutme' element={ <About handleOnClick={handleOnClick} navShow={navShow} handleClickOutside={handleClickOutside} winWidth={winWidth}/> }/>
        <Route path='/3dgallery' element={<ThreeGallery/>}/>
        <Route path='/intro' element={<Intro handleOnClick={handleOnClick} navShow={navShow} handleClickOutside={handleClickOutside}/>}/>
        <Route path='/2dgallery' element={<TwoGallery handleOnClick={handleOnClick} navShow={navShow} handleClickOutside={handleClickOutside} winWidth={winWidth}/>}/> 
        <Route path='/mobilegallery' element={<MobileGallery/>}/> 
        <Route path= '*' element={<Navigate to='/portfolio' replace/>}/>
        </Routes>

    </div>
  );
}
