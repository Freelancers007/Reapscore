function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  console.log(element);

  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

let home = document.getElementById("home");
let navbarLinks = document.querySelectorAll("a.nav-link");
let navbar = document.querySelector("nav.navbar");
console.log(navbar);
let navPos = navbar.getBoundingClientRect().top;

function navbarFunction() {
  let scrollPos = window.scrollY;
  // if (scrollPos > navPos) {
  //   navbar.classList.add("fixed-top");
  // } else {
  //   navbar.classList.remove("fixed-top");
  // }
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= scrollPos + 72 &&
      section.offsetTop + section.offsetHeight > scrollPos + 72
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", (e) => {
  navbarFunction();
});
