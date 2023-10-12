import './Portfolio.scss'

function Portfolio () {
    return (
        <section className='portfolio'>
            <div className='wrapper'>
                <div className='portfolio__actions'>
                    <h2 className='portfolio__actions-title title'>Portfolio</h2>
                    <div className='portfolio__nav nav'>
                    <ul className='nav__list'>
                        <li className='nav__item portfolio__nav-item'><a href='#' className='nav__link'>All</a></li>
                        <li className='nav__item portfolio__nav-item'><a href='#' className='nav__link'>Fashion</a></li>
                        <li className='nav__item portfolio__nav-item'><a href='#' className='nav__link'>Portrait</a></li>
                        <li className='nav__item portfolio__nav-item'><a href='#' className='nav__link'>Urban</a></li>
                        <li className='nav__item portfolio__nav-item'><a href='#' className='nav__link'>Events</a></li>
                        <li className='nav__item portfolio__nav-item'><a href='#' className='nav__link'>Nature</a></li>
                    </ul>
                    </div>
                </div>

                <div className='gallary'>
                    <div className='gallary__item-first'></div>
                    <div className='gallary__item-second'></div>
                    <div className='gallary__item-third'></div>
                    <div className='gallary__item-fourth'></div>
                    <div className='gallary__item-fifth'></div>
                    <div className='gallary__item-six'></div>
                    <div className='gallary__item-seven'></div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio