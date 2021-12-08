import { React, useEffect, useState } from 'react';
import config from '../../config';
import Moment from 'react-moment';

import api from '../../api';

import noImage from '../../assets/no-image.jpg';

import './styles.css';

const ModalMovie = ({ movie, handleSelectMovie, handleMovieDelete }) => {
    const [containerClass, setContainerClass] = useState('modal-container-no-display');

    useEffect(() => {
        if (movie) {
            setContainerClass('modal-container-display');
        } else {
            setContainerClass('modal-container-no-display');
        }
    }, [movie]);

    const handleDelete = async () => {
        try {
            await api.delete(`movies/${movie._id}`);
            handleMovieDelete();
            handleSelectMovie(null);
        }
        catch(err) {
            console.log(err);
        }
    };

    return (
        <div className={`modal-container ${containerClass}`}>
            <div className='modal-content'>
                <span className="close" onClick={() => handleSelectMovie(null)}>&times;</span>
                <div className='modal-header'>
                    {movie && movie.poster ? 
                        <img src={`${config.image_url}${movie.poster}`} alt={movie.title} />
                    :
                        <img src={noImage} alt='No movie' />
                    }
                    <div className='general-info'>
                        <h1>{movie?.title}</h1>
                        {movie && movie.genres ? (
                            <ul>
                                {movie.genres.map((genre, index) => (
                                    <li key={index}>
                                        {genre.name} {index < movie.genres.length - 1 ? " | " : ""}
                                    </li>
                                ))}
                            </ul>
                        ) : <></>}
                        <p>Release Date: <Moment format="DD/MM/YYYY">{new Date(movie?.releaseDate)}</Moment></p>
                        <p>{movie?.overview}</p>
                    </div>
                </div>
                <div className='buttons'>
                    <input type='button' onClick={() => handleDelete()} className='delete' value='Delete' />
                </div>
            </div>
        </div>
    );
};

export default ModalMovie;