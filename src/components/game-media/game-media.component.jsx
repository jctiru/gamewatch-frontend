import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "videojs-youtube";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { getVideoUrl, getModifiedImageUrl } from "../../redux/helper";
import { ImageSize } from "../../redux/constants.js";
import VideoPlayer from "../video-player/video-player.component";

SwiperCore.use([Navigation]);

const GameMedia = ({ game }) => {
  const swiperSettings = {
    spaceBetween: 20,
    slidesPerView: 1.3,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: true,
    loop: false,
    breakpoints: {
      425: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className="container-fluid">
      <Swiper {...swiperSettings}>
        {game.videos
          ? game.videos.map((video) => (
              <SwiperSlide key={video.id}>
                <VideoPlayer key={video.id} src={getVideoUrl(video.video_id)} />
              </SwiperSlide>
            ))
          : null}
        {game.screenshots
          ? game.screenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.id}>
                <img
                  key={screenshot.id}
                  className="img-fluid"
                  src={`${getModifiedImageUrl(
                    screenshot.url,
                    ImageSize.THUMB_WIDESCREEN_LARGE
                  )}`}
                  alt={`${game.name} Screenshot`}
                />
              </SwiperSlide>
            ))
          : null}
        {game.artworks
          ? game.artworks.map((artwork) => (
              <SwiperSlide key={artwork.id}>
                <img
                  key={artwork.id}
                  className="img-fluid"
                  src={`${getModifiedImageUrl(
                    artwork.url,
                    ImageSize.THUMB_WIDESCREEN_LARGE
                  )}`}
                  alt={`${game.name} Artwork`}
                />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default GameMedia;
