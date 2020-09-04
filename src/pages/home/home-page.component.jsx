import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";

import {
  getPopularNowStart,
  getMostAnticipatedStart,
  getRecentlyReleasedStart,
  getComingSoonStart,
} from "../../redux/game/game.actions";
import PopularNowContainer from "../../components/popular-now/popular-now.container";

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
