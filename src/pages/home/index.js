import { React, useEffect, useState } from 'react';

import { MovieCard } from '../../components';

import api from '../../api';

const Home = () => {
    const [ allMovies, setAllMovies ] = useState(null);

    useEffect(() => {
        const getAllMovies = async () => {
        try {
            const movies = await api.get('/movies');
    
            setAllMovies(movies);
        }
        catch(err) {
            console.log(err);
        }
        };

        getAllMovies();
    }, []);

    return (
        <section>
            {allMovies ? 
                allMovies.data.map(movie => (
                    <MovieCard key={movie._id} movie={movie} />
                )) : (
                    <div></div>
                )
            }
        </section>
    );
};

export default Home;