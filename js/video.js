const videoPlay = document.querySelector(".v-album-vid iframe");
const videoList = Array.from(document.querySelectorAll(".v-pict-item"));

videoList.forEach(function (e) {
  e.addEventListener("click", () => {
    videoPlay.src = e.dataset.src;
  });
});
