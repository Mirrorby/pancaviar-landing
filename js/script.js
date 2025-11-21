window.addEventListener('scroll', function () {
  const section = document.querySelector('.breadcrumb-section');
  let offset = window.pageYOffset;
  section.style.backgroundPositionY = offset * 0.5 + "px"; // 0.5 = скорость
});