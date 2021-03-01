import React from 'react';

const Film = ( {id,url,children}) => {
    return (
        <>
        <a href={url} key={id}>{children}</a> <br></br>
        </>
    )
}

export default Film