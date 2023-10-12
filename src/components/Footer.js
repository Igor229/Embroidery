import './Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__item'>
                    <h3 className='title footer__item-title'>get in touch</h3>
                    <p className='footer__item-text'>contactinfo@alenamiller.com</p>
                    <p className='footer__item-text'>(355)-202-234-0457</p>
                </div>

                <div className='footer__item'>
                    <h3 className='title footer__item-title'>where’s my office?</h3>
                    <p className='footer__item-text'>2489  Locust Court, Los Angeles</p>
                    <p className='footer__item-text'>3927  Red Maple Drive, Los Angeles</p>
                </div>

                <div className='footer__item'>
                    <h3 className='title footer__item-title'>My social links</h3>
                    <p className='footer__item-text'>X X X X X</p>
                </div>
            </div>
            <p className='footer__credits'>© 2021 <span>Templates Jungle</span> | All Rights Reserved</p>
        </footer>
    )
}

export default Footer