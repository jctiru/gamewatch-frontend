import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { selectGameDetails } from "../../redux/game/game.selectors";
import { ImageSize } from "../../redux/constants";
import { getModifiedImageUrl, getNoImageUrl } from "../../redux/helper";
import GameMedia from "../game-media/game-media.component";
import GameRecommendation from "../game-recommendation/game-recommendation.component";
import GameInformationColumn from "../game-information-column/game-information-column.component";

import "./game.styles.scss";

dayjs.extend(relativeTime);

const Game = ({ game }) => {
  return (
    <>
      {game ? (
        <>
          <div className="gamepage-header mb-3">
            <div className="parallax-container">
              <div
                className="parallax-background"
                style={{
                  backgroundImage: `url(${
                    game.screenshots
                      ? getModifiedImageUrl(
                          game.screenshots[0].url,
                          ImageSize.SCREENSHOT_BIG
                        )
                      : "https://images.igdb.com/igdb/image/upload/t_original/default-bg_kivul9.jpg"
                  })`,
                }}
              ></div>
            </div>
          </div>
          <div className="container mb-4">
            <div className="row">
              <div className="col-md-3 text-center">
                <img
                  key={game.id}
                  className="img-fluid"
                  src={
                    game.cover !== null
                      ? `${getModifiedImageUrl(
                          game.cover.url,
                          ImageSize.COVER_BIG
                        )}`
                      : `${getNoImageUrl(ImageSize.COVER_BIG)}`
                  }
                  alt={`${game.name}`}
                />
              </div>
              <div className="col-md-9">
                <h1 className="font-weight-bold">{game.name}</h1>
                <h4>
                  {dayjs.unix(game.first_release_date).format("MMM DD, YYYY")} (
                  {dayjs.unix(game.first_release_date).fromNow()})
                </h4>
                <h4 className="font-italic pb-3">
                  {
                    game.involved_companies.filter(
                      (company) => company.developer
                    )[0].company.name
                  }
                </h4>
                {game.genres ? (
                  <div className="mb-2">
                    <span className="h5">
                      <span className="">Genres:</span>{" "}
                      <span className="font-weight-light">
                        {game.genres.map((genre) => genre.name).join(", ")}
                      </span>
                    </span>
                  </div>
                ) : null}
                <div className="mb-2">
                  <span className="h5">
                    <span className="">Platforms:</span>{" "}
                    <span className="font-weight-light">
                      {game.platforms
                        .map((platform) => platform.name)
                        .join(", ")}
                    </span>
                  </span>
                </div>
                {game.summary ? <p>{game.summary}</p> : null}
              </div>
            </div>
          </div>
          <div className="mb-4">
            {game.videos || game.screenshots || game.artworks ? (
              <GameMedia game={game} />
            ) : null}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-4">
                  {game.storyline ? (
                    <>
                      <h3>Storyline</h3>
                      <p>{game.storyline}</p>
                    </>
                  ) : null}
                  {game.similar_games ? (
                    <GameRecommendation games={game.similar_games} />
                  ) : null}
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-4">
                  <GameInformationColumn game={game} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  game: selectGameDetails,
});

export default connect(mapStateToProps)(Game);
