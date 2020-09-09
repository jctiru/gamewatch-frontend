import React from "react";
import { Link } from "react-router-dom";

import { ImageSize } from "../../redux/constants";
import { getModifiedImageUrl } from "../../redux/helper";

import "./game-card.styles.scss";

const GameCard = ({ game }) => (
  <div className="card border-secondary">
    <Link to={`games/${game.slug}`}>
      <img
        className="card-img-top"
        src={`${getModifiedImageUrl(game.cover.url, ImageSize.COVER_BIG)}`}
        alt={game.name}
      />
    </Link>
    <div className="card-body">
      <h6 className="card-title game-card-title">
        <strong>
          <Link to={`games/${game.slug}`}>{game.name}</Link>
        </strong>
      </h6>
      <h6 className="card-subtitle game-card-subtitle">
        {game.genres !== null
          ? game.genres.map((genre) => genre.name).join(", ")
          : "-"}
      </h6>
    </div>
  </div>
);

export default GameCard;
