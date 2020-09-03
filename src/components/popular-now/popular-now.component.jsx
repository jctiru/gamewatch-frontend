import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPopularNow } from "../../redux/game/game.selectors";

const PopularNow = ({ popularNow }) => {
  return <div>{JSON.stringify(popularNow)}</div>;
};

const mapStateToProps = createStructuredSelector({
  popularNow: selectPopularNow,
});

export default connect(mapStateToProps)(PopularNow);
