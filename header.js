const navbar = document.querySelector("header");
const firstSection = [...document.querySelectorAll("section")][0];

const navOptions = {
  rootMargin: "0px",
  threshold: 0.01,
};

const headerCallback = (entries) => {
  // Check if first section is in view or not
  if (!entries[0].isIntersecting) {
    navbar.classList.remove("white-text");
  } else {
    navbar.classList.add("white-text");
  }
};

const headerObserver = new IntersectionObserver(headerCallback, navOptions);

headerObserver.observe(firstSection);
