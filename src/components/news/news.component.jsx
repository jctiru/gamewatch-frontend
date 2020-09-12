import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import dayjs from "dayjs";

import { selectNewsList } from "../../redux/news/news.selectors";

const News = ({ newsList }) => {
  return (
    <div className="container">
      {newsList.map((news) => (
        <>
          <hr />
          <div className="row" key={news.id}>
            <div className="col-md-3">
              <a
                href={news.website.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={news.image ? news.image : null}
                  className="img-fluid"
                  alt={news.title}
                />
              </a>
            </div>
            <div className="col-md-9">
              <a
                href={news.website.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="mb-1">{news.title}</h4>
              </a>
              <div className="d-block mb-2">
                <span>
                  {news.author} | {news.pulse_source.name} |{" "}
                  {dayjs.unix(news.published_at).format("MMM DD, YYYY")}
                </span>
              </div>
              <p className="lead">{news.summary}</p>
            </div>
          </div>
          <hr className="mb-5" />
        </>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newsList: selectNewsList,
});

export default connect(mapStateToProps)(News);
