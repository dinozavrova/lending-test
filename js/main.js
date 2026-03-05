document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__list");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen);
  });

  // Закрыть при клике на ссылку
  menu.querySelectorAll(".header__list-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
});
