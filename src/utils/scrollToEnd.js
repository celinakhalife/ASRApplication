const scrollToEnd = element => {
  if (element && element.current) {
    element.current.scrollTo({
      top: element.current.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }
};

export default scrollToEnd;
