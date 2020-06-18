export const debounce = (fn = () => {}, waitFor = 500) => {
  let timerId = null;

  return () => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => fn(), waitFor);
  };
};
