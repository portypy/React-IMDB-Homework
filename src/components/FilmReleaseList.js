    import React from 'react';
import Film from './Film';

    const FilmReleaseList = ({films}) => {

        const filmNodes = films.map(({id, name, url}) => {
            return <Film key={id} url={url}>{name}</Film>
        }
        )
        return(
            <>
            <h1>list</h1>
            {filmNodes}
            </>
        )
    }


    export default FilmReleaseList;