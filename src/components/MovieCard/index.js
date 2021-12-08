import config from '../../config';

import noImage from '../../assets/no-image.jpg';

import './styles.css';

const MovieCard = ({ movie }) => {
    return (
        <div className='card'>
            <div className='card-container'>
                <div className='card-information'>
                    <h3>
                        {movie.title}
                    </h3>

                    {movie.genres ? (
                        <ul>
                            {movie.genres.map((genre, index) => (
                                <li key={index}>
                                    {genre.name} {index < movie.genres.length - 1 ? " | " : ""}
                                </li>
                            ))}
                        </ul>
                    ) : <></>}
                </div>

                {movie.poster ? 
                    <img src={`${config.image_url}${movie.poster}`} alt={movie.title} />
                :
                    <img src={noImage} alt='No movie' />
                }
            </div>
        </div>
    );
};

export default MovieCard;