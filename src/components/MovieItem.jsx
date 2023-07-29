import Image from "next/image";

const MovieItem = ({ movie, onClick }) => {
  const { title, poster_path, vote_average } = movie;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${poster_path}')` }}
      onClick={onClick}
    >
      <div className="movie__info">
        <span className="movie__title">{title}</span>
        <span className="movie__rating">
          <Image
            src="./assets/estrela.svg"
            alt="Estrela"
            width={11}
            height={11}
            className="rating"
          />
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default MovieItem;
