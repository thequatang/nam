const imageList = [
  "image/anh1.jpg",
  "image/anh2.jpg",
  "image/anh3.jpg",
  "image/anh4.jpg",
  "image/anh5.jpg",
  "image/anh6.jpg",
  "image/anh7.jpg",
  "image/anh8.jpg",
];

imageList.forEach((src, index) => {
  const img = new Image();
  img.onload = function () {
    createImageMesh(img, index, 0);
  };
  img.src = src;
});
