document.addEventListener("click", function (e) {
  // console.log(e.target);
  if (
    e.target.classList.contains("hamburgerMenu") ||
    e.target.classList.contains("line")
  ) {
    line[0].classList.toggle("span1");
    line[1].classList.toggle("span2");
    line[2].classList.toggle("span3");

    document.querySelector(".nav-ul").classList.toggle("slide");
    document.querySelector("body").classList.toggle("scrollBlock");
    line.forEach(function (m) {
      m.classList.toggle("black");
    });
  }
});

navUl.forEach(function (e) {
  e.addEventListener("click", function () {
    // console.log(e.target);

    line[0].classList.toggle("span1");
    line[1].classList.toggle("span2");
    line[2].classList.toggle("span3");

    document.querySelector(".nav-ul").classList.toggle("slide");
    document.querySelector("body").classList.toggle("scrollBlock");
    line.forEach(function (m) {
      m.classList.toggle("black");
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
