import { React, useEffect, useState } from 'react';

import { MovieCard, ModalMovie } from '../../components';

import api from '../../api';

const Home = () => {
    const [ allMovies, setAllMovies ] = useState(null);
    const [ selectedMovie, setSelectedMovie ] = useState(null);

    const getAllMovies = async () => {
        try {
            const movies = await api.get('/movies');
    
            setAllMovies(movies);
        }
        catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    const handleMovieDelete = () => {
        getAllMovies();
    };

    return (
        <section>
            {allMovies ? 
                allMovies.data.map(movie => (
                    <MovieCard 
                        key={movie._id}
                        movie={movie}
                        handleSelectMovie={handleSelectMovie}
                    />
                )) : (
                    <div></div>
                )
            }
            <ModalMovie 
                movie={selectedMovie} 
                handleSelectMovie={handleSelectMovie}
                handleMovieDelete={handleMovieDelete}
            />
        </section>
    );
};

export default Home;