import Image from "next/image";

const HighlightMovie = ({ highlightMovie }) => {
  if (!highlightMovie) return null;

  const { title, backdrop_path, overview, genres, vote_average, videoLink } =
    highlightMovie;

  return (
    <div className="highlight">
      <a
        className="highlight__video-link"
        href={videoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="highlight__video"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6) 100%), url('${backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image src="/assets/play.svg" alt="Play" width={40} height={40} />
        </div>
      </a>
      <div className="highlight__info">
        <div className="highlight__title-rating">
          <h3 className="highlight__title">{title}</h3>
          <span className="highlight__rating">{vote_average}</span>
        </div>
        <div className="highlight__genre-launch">
          <span className="highlight__genres">
            {genres.map((genre) => genre.name).join(", ")}
          </span>
          <span className="highlight__launch">{" / 25 DE MAIO DE 2023"}</span>
        </div>
        <p className="highlight__description">{overview}</p>
      </div>
    </div>
  );
};

export default HighlightMovie;
