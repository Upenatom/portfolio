import './Burger.css'
export default function ({ handleOnClick }) {
    return (
        <div className='burger' onClick={() => handleOnClick()}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>

    )
}
