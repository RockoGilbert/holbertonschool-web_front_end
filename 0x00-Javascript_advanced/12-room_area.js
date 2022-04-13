let roomDimensions = {
  width: 50,
  length: 100,
  getArea() {
    return this.width * this.height;
  },
  };
  let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

boundGetArea();
