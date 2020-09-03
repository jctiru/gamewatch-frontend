import React, { useEffect } from "react";
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
  useEffect(() => {
    getPopularNowStart();
    getMostAnticipatedStart();
    getRecentlyReleasedStart();
    getComingSoonStart();
  });
  return (
    <>
      <div>Popular Games Now</div>
      <PopularNowContainer />
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
