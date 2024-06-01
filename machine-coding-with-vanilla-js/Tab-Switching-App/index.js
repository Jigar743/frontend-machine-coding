document.addEventListener("DOMContentLoaded", () => {
  const tabItems = document.querySelectorAll(".tab-list-item");
  const tabContents = document.querySelectorAll(".tab-content");

  tabItems.forEach((item) => {
    item.addEventListener("click", () => {
      tabItems.forEach((tab) => tab.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      item.classList.add("active");

      const tabContent = document.getElementById(item.getAttribute("data-tab"));
      tabContent.classList.add("active");
    });
  });
});
