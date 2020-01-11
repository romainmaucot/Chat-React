import axios from 'axios';

export default async function getMovieByName() {
    await axios.get('http://www.omdbapi.com/?apikey=b502738f&s=matrix')
        .then(function (response) {
            let Movies = response.data.Search;
            Movies =  Movies
                .filter( movie => movie.Year > 2002)
                .map( ({ Title, Year }) => `${Title} - ${Year}` );
            console.log(Movies);
            return Movies;
        });
}

