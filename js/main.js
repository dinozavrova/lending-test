document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__list");

  if (!burger || !menu) return;

 
  burger.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("open");
    burger.classList.toggle("active");
    burger.setAttribute("aria-expanded", isOpen);
  });

  
  menu.querySelectorAll(".header__list-link").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (e) {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    }
  });
});
