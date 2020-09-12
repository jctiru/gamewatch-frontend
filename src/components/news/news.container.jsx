import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsNewsLoading,
  selectAreInitialNewsLoaded,
} from "../../redux/news/news.selectors";
import WithSpinnerItems from "../with-spinner-items/with-spinner-items.component";
import News from "./news.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsNewsLoading,
  areInitialItemsLoaded: selectAreInitialNewsLoaded,
});

const NewsContainer = compose(connect(mapStateToProps), WithSpinnerItems)(News);

export default NewsContainer;
