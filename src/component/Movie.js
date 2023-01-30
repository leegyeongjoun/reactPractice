import React from 'react';

//props를 쓰면 앞에다 써줘야 함
const Movie = ({movie}) => {
    return (
        <div className="movie">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
};

export default Movie;