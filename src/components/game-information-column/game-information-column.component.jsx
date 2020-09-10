import React from "react";
import dayjs from "dayjs";

const GameInformationColumn = ({ game }) => {
  return (
    <div>
      <h3>Information</h3>
      <div className="mb-3">
        <p className="h5 mb-1">First release date:</p>
        <p className="mb-0">
          {dayjs.unix(game.first_release_date).format("MMM DD, YYYY")}
        </p>
      </div>
      {game.involved_companies ? (
        <>
          <div className="mb-3">
            <p className="h5 mb-1">Developers:</p>
            {game.involved_companies
              .filter((company) => company.developer)
              .map((company) => (
                <p key={company.id} className="mb-0">
                  {company.company.name}
                </p>
              ))}
          </div>
          <div className="mb-3">
            <p className="h5 mb-1">Publishers:</p>
            {game.involved_companies
              .filter((company) => company.publisher)
              .map((company) => (
                <p key={company.id} className="mb-0">
                  {company.company.name}
                </p>
              ))}
          </div>
          {game.involved_companies.filter((company) => company.supporting)
            .length ? (
            <div className="mb-3">
              <p className="h5 mb-1">Supporting Developers:</p>
              {game.involved_companies
                .filter((company) => company.supporting)
                .map((company) => (
                  <p key={company.id} className="mb-0">
                    {company.company.name}
                  </p>
                ))}
            </div>
          ) : null}
          {game.involved_companies.filter((company) => company.porting)
            .length ? (
            <div className="mb-3">
              <p className="h5 mb-1">Porting Developers:</p>
              {game.involved_companies
                .filter((company) => company.porting)
                .map((company) => (
                  <p key={company.id} className="mb-0">
                    {company.company.name}
                  </p>
                ))}
            </div>
          ) : null}
        </>
      ) : null}
      {game.genres ? (
        <div className="mb-3">
          <p className="h5 mb-1">Genres:</p>
          {game.genres.map((genre) => (
            <p key={genre.id} className="mb-0">
              {genre.name}
            </p>
          ))}
        </div>
      ) : null}
      {game.themes ? (
        <div className="mb-3">
          <p className="h5 mb-1">Themes:</p>
          {game.themes.map((theme) => (
            <p key={theme.id} className="mb-0">
              {theme.name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default GameInformationColumn;
