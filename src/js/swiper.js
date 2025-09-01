const swiper = new Swiper('.swiper', {
  // your config
  on: {
    touchMove: function (swiper, event) {
      // block left swipe (example)
      if (swiper.touches.diff > 0) {
        swiper.allowTouchMove = false;
      } else {
        swiper.allowTouchMove = true;
      }
    },
    touchEnd: function () {
      this.allowTouchMove = true; // reset
    }
  }
});
