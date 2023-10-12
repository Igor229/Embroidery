import './AboutMe.scss'
import aboutImage from '../assets/images/aboutMeImage.png'

function AboutMe () {
    return (
        <section className="about">
            <div className='about__container'>
                <img src={aboutImage} alt='aboutImage' className='about__image'/>
                <div className='info-container'>
                    <div className='about__info'>
                        <h2 className='about__info-title'>About Me</h2>
                        <hr/>

                        <p className='about__info-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Senectus scelerisque viverra at id aenean scelerisque.
                            Nec eget condimentum etiam leo.
                        </p>
                        <p className='about__info-text'>
                            Morbi at eget fusce feugiat volutpat et volutpat malesuada.
                            At suspendisse nisi, quam neque in leo sollicitudin.
                        </p>

                        <button className='button about__info-action'><a href='#'>View My Works</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe