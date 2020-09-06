import { connect } from "react-redux";

import {
  selectIsMostAnticipatedLoading,
  selectIsRecentlyReleasedLoading,
  selectIsComingSoonLoading,
} from "../../redux/game/game.selectors";
import { GameColumnCategory } from "../../redux/constants";
import WithSpinner from "../with-spinner/with-spinner.component";
import GameCardColumn from "./game-card-column.component";

const mapStateToProps = (state, { gameColumnCategory }) => {
  switch (gameColumnCategory) {
    case GameColumnCategory.MOST_ANTICIPATED:
      return {
        isLoading: selectIsMostAnticipatedLoading(state),
      };
    case GameColumnCategory.RECENTLY_RELEASED:
      return {
        isLoading: selectIsRecentlyReleasedLoading(state),
      };
    case GameColumnCategory.COMING_SOON:
      return {
        isLoading: selectIsComingSoonLoading(state),
      };
    default:
      return {};
  }
};

const GameCardColumnContainer = connect(mapStateToProps)(
  WithSpinner(GameCardColumn)
);

export default GameCardColumnContainer;
