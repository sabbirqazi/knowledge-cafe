import React from 'react';

const BookMark = ({bookMark}) => {
    console.log(bookMark)
    return (
        <>
        <p className=' p-5 text-xl bg-base-100 my-5 rounded font-semibold'>{bookMark.blog_title}</p>
        </>
    );
};

export default BookMark;