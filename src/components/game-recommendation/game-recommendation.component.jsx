import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { getModifiedImageUrl, getNoImageUrl } from "../../redux/helper";
import { ImageSize } from "../../redux/constants";

SwiperCore.use([Navigation]);

const GameRecommendation = ({ games }) => {
  const swiperSettings = {
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: true,
    loop: false,
    breakpoints: {
      425: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Swiper {...swiperSettings}>
      {games.map((game) => (
        <SwiperSlide key={game.id}>
          <div>
            <Link to={`${game.slug}`}>
              <img
                key={game.id}
                className="img-fluid"
                src={
                  game.cover !== null
                    ? `${getModifiedImageUrl(
                        game.cover.url,
                        ImageSize.COVER_MED
                      )}`
                    : `${getNoImageUrl(ImageSize.COVER_MED)}`
                }
                alt={`${game.name}`}
              />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GameRecommendation;
