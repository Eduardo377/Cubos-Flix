import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import HighlightMovie from "../components/HighlightMovie";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import toggleTheme from "../components/ToggleTheme";

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTheme, setCurrentTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [highlightMovie, setHighlightMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    loadMovies();
    loadHighlightMovie();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCurrentPage(0);
      if (searchQuery) {
        loadSearchMovies(searchQuery);
      } else {
        loadMovies();
      }
    }
  };

  const handleToggleTheme = () => {
    toggleTheme(currentTheme, setCurrentTheme);
  };

  const loadSearchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?query=${encodeURIComponent(
          searchQuery,
        )}&language=pt-BR&include_adult=false`,
      );
      const data = response.data;
      setMovies(data.results);
    } catch (error) {
      console.error("Erro ao carregar os filmes:", error);
    }
  };

  const loadMovies = async () => {
    try {
      const response = await fetch(
        "https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false",
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Erro ao carregar os filmes:", error);
    }
  };

  const loadHighlightMovie = async () => {
    try {
      const baseResponse = await fetch(
        "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/346698?language=pt-BR",
      );
      const baseData = await baseResponse.json();

      const linkResponse = await fetch(
        "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/346698/videos?language=pt-BR",
      );
      const linkData = await linkResponse.json();

      const highlightMovieWithLink = { ...baseData };
      if (linkData.results.length > 0) {
        highlightMovieWithLink.videoLink = `https://www.youtube.com/watch?v=${linkData.results[0].key}`;
      }

      setHighlightMovie(highlightMovieWithLink);
    } catch (error) {
      console.error("Erro ao carregar o destaque do dia:", error);
    }
  };

  const handleMovieClick = (movie) => {
    if (movie.genres) {
      setCurrentMovie(movie);
      console.log("Abriu Modal");
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("Fechou Modal");
    document.body.style.overflow = "auto";
  };

  const displayMovies = () => {
    return movies.slice(currentPage * 5, (currentPage + 1) * 5).map((movie) => (
      <div
        className="movie"
        key={movie.id}
        style={{ backgroundImage: `url('${movie.poster_path}')` }}
        onClick={() => handleMovieClick(movie)}
      >
        <div className="movie__info">
          <span className="movie__title">{movie.title}</span>
          <span className="movie__rating">
            <Image
              src="./assets/estrela.svg"
              alt="Estrela"
              width={11}
              height={11}
              className="rating"
            />
            {movie.vote_average}
          </span>
        </div>
      </div>
    ));
  };

  const handleNextButtonClick = () => {
    setCurrentPage((prevPage) => (prevPage === 3 ? 0 : prevPage + 1));
  };

  const handlePrevButtonClick = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? 3 : prevPage - 1));
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <Head>
        <title>Cubos Flix</title>
      </Head>
      <Header onToggleTheme={handleToggleTheme} />
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="Pesquisar..."
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="movies-container">
          <Image
            src="./assets/seta-esquerda-preta.svg"
            alt="Seta esquerda"
            onClick={handlePrevButtonClick}
            width={36}
            height={36}
          />
          <div className="movies">{displayMovies()}</div>
          <Image
            src="./assets/seta-direita-preta.svg"
            alt="Seta direita"
            onClick={handleNextButtonClick}
            width={36}
            height={36}
          />
        </div>
        <h2 className="subtitle">Highlight do dia</h2>
        {highlightMovie && <HighlightMovie highlightMovie={highlightMovie} />}
      </div>
      <Footer />
      <Modal isOpen={isOpen} onClose={closeModal} movie={currentMovie} />
    </motion.div>
  );
};

export default IndexPage;
