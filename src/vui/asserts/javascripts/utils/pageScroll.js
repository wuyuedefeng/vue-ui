/* eslint-disable */
const pageScroll = (function () {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let islock = false
  return {
    lock: (el) => {
      if (!islock) {
        islock = true;
        (el || document).addEventListener('touchmove', fn);
        (el || document).addEventListener('mousewheel', fn);
      }
    },
    unlock: (el) => {
      if (islock) {
        islock = false;
        (el || document).removeEventListener('touchmove', fn);
        (el || document).removeEventListener('mousewheel', fn);
      }
    }
  }
})()
export default pageScroll
