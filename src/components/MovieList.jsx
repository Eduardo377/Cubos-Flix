import MovieItem from "./MovieItem";

const MovieList = ({ movies, onPageChange }) => {
  return (
    <div className="movies-container">
      <button onClick={() => onPageChange(-1)}>Previous</button>
      <div className="movies">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      <button onClick={() => onPageChange(1)}>Next</button>
    </div>
  );
};

export default MovieList;
