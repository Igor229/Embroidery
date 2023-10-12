import { useState } from 'react';
import './Blog.scss'
import BlogItem from './BlogItem'

const itemInfoArray = [
    {
        date: '3.10.2023',
        hash: 'Trends',
        title: 'why the trend of minimalism?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Mattis auctor in mauris elit lobortis. Attis auctor in mauris.'
    },
    {
        date: '5.10.2023',
        hash: 'Trends',
        title: 'simple tips & tricks of photography',
        text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Mattis auctor in mauris elit lobortis. Attis auctor in mauris.'
    },
    {
        date: '6.10.2023',
        hash: 'collection',
        title: 'world’s top photograph collections',
        text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Mattis auctor in mauris elit lobortis. Attis auctor in mauris.'
    },
    {
        date: '8.10.2023',
        hash: 'Portraits',
        title: 'how to get model look portraits',
        text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Mattis auctor in mauris elit lobortis. Attis auctor in mauris.'
    },
]

function Blog () {
    const [blogItem, setBlogItem] = useState(itemInfoArray)

    return (
        <section className='blog'>
            <div className='wrapper'>
                <h2 className='blog__title title'>Blog</h2>

                <div className='blog__content'>
                    {
                        blogItem.map(data => (
                            <BlogItem
                                date={data.date}
                                hash={data.hash}
                                title={data.title}
                                text={data.text}
                            />
                        ))
                    }
                </div>

                <button className='button blog__action'><a href='#'>View all blogs</a></button>
            </div>
        </section>
    )
}

export default Blog