import './Contacts.scss'
import contactsImage from '../assets/images/contactsImage.jpg'

function Contacts () {
    return (
        <section className='contacts'>
            <div className='contacts__actions'>
                <h2 className='title contacts__actions-tilte'>Contact Me</h2>
                <p className='contacts__actions-subTitle'>I would love to get suggestions from you.</p>

                <form className='form'>
                    <div className='form__names'>
                        <input className='form-item' type='text' id='fname' placeholder='Your name'/>
                        <input className='form-item' type='email' id='email' placeholder='Your e-mail adress'/>
                    </div>
                    <input className='form-item' type='text' id='text' placeholder='Your message'/>

                    <button className='button form-button'>Send It</button>
                </form>
            </div>

            <img src={contactsImage} alt='contacts image' className='contacts__image'/>
        </section>
    )
}

export default Contacts