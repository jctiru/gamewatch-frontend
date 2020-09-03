import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsPopularNowLoading } from "../../redux/game/game.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import PopularNow from "./popular-now.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsPopularNowLoading,
});

const PopularNowContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PopularNow);

export default PopularNowContainer;
