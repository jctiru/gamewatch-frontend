export const getModifiedImageUrl = (imageUrl, imageSize) => {
  return imageUrl.replace("t_thumb", `t_${imageSize}`);
};

export const getNoImageUrl = (imageSize) => {
  return `//images.igdb.com/igdb/image/upload/t_${imageSize}/nocover_qhhlj6.jpg`;
};

export const getVideoUrl = (videoId) => {
  return `https:www.youtube.com/watch?v=${videoId}`;
};
