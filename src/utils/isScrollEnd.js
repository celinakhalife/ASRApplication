const isScrollEnd = element => {
  let bottom = false;
  if (element && element.current) {
    bottom =
      element.current.scrollHeight - element.current.scrollTop - 50 <=
      element.current.clientHeight;
  }
  return bottom;
};

export default isScrollEnd;
