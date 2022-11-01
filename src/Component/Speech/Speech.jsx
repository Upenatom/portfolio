
import './Speech.css'


export default function Speech({ divobj }) {

    return (
        <div>
            <div className='speech' ref={divobj}>
                <section className='first'>Hello! <br />Don't be afraid. <br />Your browser was hi-jacked for a good reason.<br /> I've re-directed you here to give you a choice.</section>
                <section className='second'>Oh really? What's my choice?</section>
                <div className='flex-row'>
                    <section className='third'>Choose the <b style={{ color: 'yellow' }}>game controller</b> and you'll find yourself in a new and exciting browsing experience.</section>
                    <br />
                    <section className='third'> Choose the <b style={{ color: 'red' }}>phone</b> and it will be like this never happened.<br /> <br />Choose wisely visitor. </section>
                </div>
            </div>

        </div>
    )
}
