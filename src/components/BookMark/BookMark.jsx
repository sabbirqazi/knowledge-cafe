import React from 'react';

const BookMark = ({bookMark}) => {
    console.log(bookMark)
    return (
        <>
        <p>{bookMark.blog_title}</p>
        </>
    );
};

export default BookMark;