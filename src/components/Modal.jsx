import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  const { title, backdrop_path, overview, genres, vote_average } = movie || {};

  const modalVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "block" },
  };

  const modalContentVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  console.log("Valor da prop isOpen:", isOpen);
  console.log("Valor da prop onClose:", onClose);
  console.log("Valor da prop movie:", movie);

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={modalVariants}
      className="modal"
    >
      <motion.div variants={modalContentVariants}>
        {backdrop_path && (
          <Image
            src={backdrop_path}
            alt={title}
            className="modal__img"
            width={730}
            height={411}
          />
        )}
        <div className="modal__info">
          <h3 className="modal__title">{title}</h3>
          <div className="modal__genre-average">
            <div className="modal__genres">
              {genres &&
                genres.map((genre) => (
                  <span key={genre.id} className="modal__genre">
                    {genre.name}
                  </span>
                ))}
            </div>
            <div className="modal__average">{vote_average}</div>
          </div>
          <p className="modal__description">{overview}</p>
        </div>
        <Image
          src="./assets/close.svg"
          alt="Close"
          className="modal__close"
          onClick={onClose}
          width={40}
          height={40}
        />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
