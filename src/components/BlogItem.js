
function BlogItem (props) {
    const {date, hash, title, text} = props

    return (
        <div className='blog__item'>
            <div className='blog__item-date'>
                <p className='date'>{date}</p>
                <p className='hash'>{hash}</p>
            </div>
            <h3 className='blog__item-title'>{title}</h3>
            <p className='blog__item-text'>{text}</p>
        </div>
    )
}

export default BlogItem