// Set active css classes to open menu
const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};

// Remove active css classes when closing menu
const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

// Open Aside Menu when clicking on Menu Button
document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

// Close Aside Menu on clicking X
document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
};

// Close Aside Menu when clicking on backdrop
document.querySelector(".backdrop").onclick = (e) => {
  closeMenu();
};

// Close Aside Menu when pressing Esc
document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
