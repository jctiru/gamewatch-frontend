import React from "react";
import { useEffect, useRef } from "react";

import videojs from "video.js";

import "video.js/dist/video-js.min.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const options = useRef({
    fluid: true,
    preload: "auto",
    controls: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: src,
        type: "video/youtube",
      },
    ],
  });

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, options.current);

    return () => vjsPlayer.dispose();
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered">
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/">
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  );
};

export default VideoPlayer;
