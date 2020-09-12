import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import queryString from "query-string";
import ReactPaginate from "react-paginate";

import { getNewsStart } from "../../redux/news/news.actions";
import NewsContainer from "../../components/news/news.container";

const NewsPage = ({ getNewsStart }) => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryStringObj = queryString.parse(location.search);

    if (
      typeof queryStringObj.page !== "undefined" &&
      /^\d+$/.test(queryStringObj.page) &&
      parseInt(queryStringObj.page) > 0
    ) {
      setPage(queryStringObj.page);
    }

    getNewsStart(location.search);
  }, [getNewsStart, location.search]);

  const handlePageClick = (data) => {
    const querySearch = queryString.stringify(
      { page: data.selected + 1 },
      { skipNull: true }
    );

    history.push(location.pathname + "?" + querySearch);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <h1 className="mt-3">Game News</h1>
      <div>
        <NewsContainer />
      </div>
      <div>
        <ReactPaginate
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          forcePage={page - 1}
          onPageChange={handlePageClick}
          disableInitialCallback={true}
          containerClassName={"pagination justify-content-center"}
          subContainerClassName={"pages pagination"}
          previousLabel="&lsaquo;"
          nextLabel="&rsaquo;"
          breakLabel={"..."}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getNewsStart: (urlParams) => dispatch(getNewsStart({ urlParams })),
});

export default connect(null, mapDispatchToProps)(NewsPage);
