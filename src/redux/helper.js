export const getModifiedImageUrl = (imageUrl, imageSize) => {
  return imageUrl.replace("t_thumb", `t_${imageSize}`);
};
