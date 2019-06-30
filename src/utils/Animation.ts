// The behavior here is to slide in with base length that gets longer for each element, getting a nice "slide in" effect
// Gets cut off at a certain point to avoid long lists animating for way too long
const baseSlideLength: number = 0.6;
const additionalSlideLength: number = 0.12;
const maxSlideLength = 2;

const calculateSlideLength = (num: number) =>
  Math.min(maxSlideLength, baseSlideLength + additionalSlideLength * num);

export const slideIn = (index: number) => {
  return {
    animation: `slide ${calculateSlideLength(index)}s ease forwards`
  };
};

export const enableScroll = (count: number) => {
  return {
    animation: `enableScroll ${calculateSlideLength(count)}s linear forwards`
  };
};
