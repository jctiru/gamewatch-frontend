import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { selectPopularNow } from "../../redux/game/game.selectors";
import GameCard from "../game-card/game-card.component";

SwiperCore.use([Navigation]);

const PopularNow = ({ popularNow }) => {
  const swiperSettings = {
    spaceBetween: 20,
    slidesPerView: 1.8,
    centeredSlides: true,
    navigation: true,
    loop: true,
    breakpoints: {
      425: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5.5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Swiper {...swiperSettings}>
      {popularNow.map((game) => (
        <SwiperSlide key={game.id}>
          <GameCard key={game.id} game={game} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const mapStateToProps = createStructuredSelector({
  popularNow: selectPopularNow,
});

export default connect(mapStateToProps)(PopularNow);
