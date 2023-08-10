const month = Array.from(document.querySelectorAll(".month p"));

month.forEach((e) => {
  e.addEventListener("click", function () {
    month.forEach((m) => {
      m.classList.remove("bl");
    });
    e.classList.add("bl");
  });
});
