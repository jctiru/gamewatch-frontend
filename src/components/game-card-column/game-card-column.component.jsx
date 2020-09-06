import React from "react";
import { connect } from "react-redux";

import {
  selectMostAnticipated,
  selectRecentlyReleased,
  selectComingSoon,
} from "../../redux/game/game.selectors";
import { GameColumnCategory } from "../../redux/constants";
import GameCardSmall from "../game-card-small/game-card-small.component";

const GameCardColumn = ({ games }) => {
  return (
    <div className="">
      {games.map((game) => (
        <GameCardSmall key={game.id} game={game} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, { gameColumnCategory }) => {
  switch (gameColumnCategory) {
    case GameColumnCategory.MOST_ANTICIPATED:
      return {
        games: selectMostAnticipated(state),
      };
    case GameColumnCategory.RECENTLY_RELEASED:
      return {
        games: selectRecentlyReleased(state),
      };
    case GameColumnCategory.COMING_SOON:
      return {
        games: selectComingSoon(state),
      };
    default:
      return {};
  }
};

export default connect(mapStateToProps)(GameCardColumn);
