import logo from '../assets/logos/main-logo.png'
import billboardImage from '../assets/images/billboardImage.png'
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <div className='header__navbar'>
                <div className='header__navbar-logo'>
                    <img src={logo} alt='main-logo' className='header-logo'/>
                </div>
                <div className='header__navbar-nav nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'><a href='#' className='nav__link'>Home</a></li>
                        <li className='nav__item'><a href='#' className='nav__link'>About Me</a></li>
                        <li className='nav__item'><a href='#' className='nav__link'>Portfolio</a></li>
                        <li className='nav__item'><a href='#' className='nav__link'>Blog</a></li>
                        <li className='nav__item'><a href='#' className='nav__link'>Contact</a></li>
                    </ul>
                </div>
                <div className='header__navbar-social'>
                    <p>X</p>
                    <p>X</p>
                    <p>X</p>
                    <p>X</p>
                    <p>X</p>
                </div>
            </div>

            {/* =================================================================================================== */}
            <img src={billboardImage} alt='billboard-image' className='billboard__image'/>
            <div className='header__billboard'>
                <div className='billboard__text'>
                    <h1 className='billboard__text-title'>photographer<br/> & film maker</h1>
                    <h3 className='billboard__text-subtitle'>Los Angeles, USA</h3>
                    <button className='button billboard__text-action'><a href='#' className='billboard-button'>Hire Me</a></button>
                </div>
            </div>
        </div>
    )
}

export default Header