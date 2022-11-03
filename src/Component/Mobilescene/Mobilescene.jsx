import Spline from '@splinetool/react-spline';

export default function MobileScne({ onLoad, onMouseUp }) {
    return (
        <Spline scene="https://prod.spline.design/eslujML-JUWD6CYS/scene.splinecode" onLoad={onLoad}
            onMouseUp={onMouseUp}
        />
    );
}
