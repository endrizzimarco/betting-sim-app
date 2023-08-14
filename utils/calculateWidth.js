const responsiveSize = (screenWidth) => {
  if (screenWidth < 500) return "100%";
  else if (screenWidth < 1000) return "50%";
  else if (screenWidth < 1500) return "33%";
  else return "25%";
};

export default responsiveSize;
