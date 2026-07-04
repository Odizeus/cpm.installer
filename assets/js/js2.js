document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  var filterButtons = document.querySelectorAll("[data-filter]");
  var galleryItems = document.querySelectorAll("[data-category]");
  var currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    var href = link.getAttribute("href") || "";
    var linkPage = href.split("/").pop();

    if ((currentPage === "" || currentPage === "index.html") && linkPage === "index.html") {
      link.classList.add("active");
    } else if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) {
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");

        filterButtons.forEach(function (item) {
          item.classList.remove("active");
        });
        button.classList.add("active");

        galleryItems.forEach(function (item) {
          var category = item.getAttribute("data-category");
          item.classList.toggle("hidden", filter !== "all" && category !== filter);
        });
      });
    });
  }
});
