import imageData from "./imageData.json"; 
export const getRandomImage = () => {
    const images = imageData.images;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };