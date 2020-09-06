import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";

import {
  getPopularNowStart,
  getMostAnticipatedStart,
  getRecentlyReleasedStart,
  getComingSoonStart,
} from "../../redux/game/game.actions";
import PopularNowContainer from "../../components/popular-now/popular-now.container";
import GameCardColumnContainer from "../../components/game-card-column/game-card-column.container";
import { GameColumnCategory } from "../../redux/constants";

const HomePage = ({
  getPopularNowStart,
  getMostAnticipatedStart,
  getRecentlyReleasedStart,
  getComingSoonStart,
}) => {
  useLayoutEffect(() => {
    getPopularNowStart();
    getMostAnticipatedStart();
    getRecentlyReleasedStart();
    getComingSoonStart();
  });
  return (
    <>
      <div className="container">
        <div>
          <h2>Popular Games Now</h2>
        </div>
        <div>
          <PopularNowContainer />
        </div>
        <div className="row">
          <div className="col-12 col-sm-4">
            <h3>Recently Released</h3>
            <GameCardColumnContainer
              gameColumnCategory={GameColumnCategory.RECENTLY_RELEASED}
            />
          </div>
          <div className="col-12 col-sm-4">
            <h3>Coming Soon</h3>
            <GameCardColumnContainer
              gameColumnCategory={GameColumnCategory.COMING_SOON}
            />
          </div>
          <div className="col-12 col-sm-4">
            <h3>Most Anticipated</h3>
            <GameCardColumnContainer
              gameColumnCategory={GameColumnCategory.MOST_ANTICIPATED}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPopularNowStart: () => dispatch(getPopularNowStart()),
  getMostAnticipatedStart: () => dispatch(getMostAnticipatedStart()),
  getRecentlyReleasedStart: () => dispatch(getRecentlyReleasedStart()),
  getComingSoonStart: () => dispatch(getComingSoonStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
