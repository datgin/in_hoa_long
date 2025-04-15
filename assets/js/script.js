const swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper = new Swiper(".swiper-container", {
  loop: true, // Bật vòng lặp cho các slide
  autoplay: {
    delay: 10000, // Tự động chuyển slide sau 6 giây
  },
  pagination: {
    el: ".swiper-pagination", // Hiển thị phân trang
    clickable: true,
  },
  slidesPerView: 1.2, // Số lượng slide hiển thị
  spaceBetween: 10, // Khoảng cách giữa các slide
  centeredSlides: false, // Giữ slide giữa
  allowTouchMove: true,
  breakpoints: {
    768: {
      slidesPerView: 1.2, // Màn hình nhỏ hiển thị 1 slide
    },
    1024: {
      slidesPerView: 2, // Màn hình lớn hơn hiển thị 2 slide
    },
  },
});
const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  allowTouchMove: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
