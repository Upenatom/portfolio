import Spline from '@splinetool/react-spline';
import './Introscene.css'
export default function introScene({ onWheel, onMouseUp }) {
    return (
        <Spline className='introscene' scene="https://prod.spline.design/uxMuY5BkX61dFSap/scene.splinecode" onWheel={onWheel} onMouseUp={onMouseUp} />
    );
}


