import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsGameLoading } from "../../redux/game/game.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Game from "./game.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsGameLoading,
});

const GameContainer = compose(connect(mapStateToProps), WithSpinner)(Game);

export default GameContainer;
