export default function throttle(callback, delay) {
  let timer = null;

  return (e) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(e);
      timer = null;
    }, delay);
  };
}
