import React from 'react'
import ShortenItem from './ShortenItem'

const ShortenUrlList = ({ data }) => {
    const list = Array.isArray(data) ? data : [];
    return (
        <div className='my-6 space-y-4'>
            {list.map((item) => (
                <ShortenItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export default ShortenUrlList