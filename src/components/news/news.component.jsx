import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import dayjs from "dayjs";

import { selectNewsList } from "../../redux/news/news.selectors";

const News = ({ newsList }) => {
  return (
    <div className="container">
      {newsList.map((news) => (
        <div key={news.id}>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <a
                href={news.site_detail_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={news.image ? news.image.original : null}
                  className="img-fluid"
                  alt={news.title}
                />
              </a>
            </div>
            <div className="col-md-9">
              <a
                href={news.site_detail_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="mb-1">{news.title}</h4>
              </a>
              <div className="d-block mb-2">
                <span>
                  GameSpot | {news.authors} |{" "}
                  {dayjs(news.publish_date).format("MMM DD, YYYY h:mm A")} PDT
                </span>
              </div>
              <p className="lead">{news.deck}</p>
            </div>
          </div>
          <hr className="mb-5" />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newsList: selectNewsList,
});

export default connect(mapStateToProps)(News);
