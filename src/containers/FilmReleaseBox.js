import React from 'react';
import FilmReleaseList from '../components/FilmReleaseList';
import UpcomingReleasesLink from '../components/UpcomingReleasesLink';

const FilmReleaseBox = () => {
    return(
        <>
        <h1>FilmReleaseBox</h1>
        <FilmReleaseList />
        <UpcomingReleasesLink />
        </>
    )
}

export default FilmReleaseBox;