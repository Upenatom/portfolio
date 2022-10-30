import Spline from '@splinetool/react-spline';


export default function Splinescene({ onMouseUp, onLoad }) {

    return (
        <>
            <Spline scene="https://prod.spline.design/ED4xGwZwmVRDJgV4/scene.splinecode" onMouseUp={onMouseUp} onLoad={onLoad} />
        </>
    );
}
