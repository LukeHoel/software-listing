const baseSlideLength: number = 0.6;
const additionalSlideLength: number = 0.12;

export const slideIn = (index: number) => {
  return {
    animation: `slide ${baseSlideLength +
      additionalSlideLength * index}s ease forwards`
  };
};

export const enableScroll = (count: number) => {
  return {
    animation: `enableScroll ${baseSlideLength +
      additionalSlideLength * count}s linear forwards`
  };
};
