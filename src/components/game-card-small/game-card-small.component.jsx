import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { ImageSize } from "../../redux/constants";
import { getModifiedImageUrl, getNoImageUrl } from "../../redux/helper";

import "./game-card-small.styles.scss";

dayjs.extend(relativeTime);

const GameCardSmall = ({ game }) => (
  <div className="mt-3 overflow-hidden">
    <div className="d-table-cell align-top pr-2">
      <div className="position-relative game-card-small-left">
        <Link to={`games/${game.slug}`}>
          <img
            src={
              game.cover !== null
                ? `${getModifiedImageUrl(
                    game.cover.url,
                    ImageSize.COVER_SMALL
                  )}`
                : `${getNoImageUrl(ImageSize.COVER_SMALL)}`
            }
            className="game-card-img"
            alt={game.name}
          />
        </Link>
      </div>
    </div>
    <div className="d-table-cell align-top text-nowrap pl-1">
      <Link to={`games/${game.slug}`} className="d-block">
        {game.name}
      </Link>
      {dayjs.unix(game.first_release_date).format("MMM DD, YYYY")} (
      {dayjs.unix(game.first_release_date).fromNow()})
    </div>
  </div>
);

export default GameCardSmall;
