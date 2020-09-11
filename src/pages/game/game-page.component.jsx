import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";

import { getGameStart } from "../../redux/game/game.actions";
import GameContainer from "../../components/game/game.container";

const GamePage = ({ getGameStart, match }) => {
  useLayoutEffect(() => {
    getGameStart(match.params.gameSlug);
  }, [getGameStart, match]);

  return <GameContainer />;
};

const mapDispatchToProps = (dispatch) => ({
  getGameStart: (gameSlug) => dispatch(getGameStart({ gameSlug })),
});

export default connect(null, mapDispatchToProps)(GamePage);
