const nama_member = document.querySelectorAll(".member_name p");
const imgMember = document.querySelectorAll(".member div");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const logo = document.querySelector(".logo");
const socialMedia = document.querySelectorAll(".socialMedia");
const line = document.querySelectorAll(".line");
const navUl = document.querySelectorAll(".nav-ul li");

nama_member.forEach(function (member) {
  member.addEventListener("click", function (e) {
    // const nama = document.querySelectorAll(".inner");
    // nama.forEach(function (e) {
    //   e.className += " ilang";
    //   if (e.id == member.id) {
    //     e.classList.toggle("ilang");
    //   }
    // });
    // member.parentElement.lastElementChild.remove();
    // console.log(e);

    // cara menggunakan template literal
    const temp = `<div id="${member.id}" class="inner">
    <div class="memberImg">
      <div class="colorBg"></div>
      <img src="img/${member.id}.jpg" alt="" />
    </div>

    <div class="memberTag">
      <div class="name">${member.id.toUpperCase()}</div>
      <p>Date of Birth: ${member.dataset.birth}</p>
    </div>
  </div>`;

    document.querySelector(".member").innerHTML = temp;
  });
});

const posScrollYFirst = document.documentElement.scrollTop;
const icon = document.querySelector(".containerHeader i");
const body = document.querySelector("body");
let mode = "";

const theme = localStorage.getItem("theme");
if (theme === "dark") {
  icon.className = "bi bi-brightness-high-fill";
  icon.id = "sun";
  document.querySelector("body").className = "dark_mode";
} else {
  icon.className = "bi bi-moon-stars-fill";
  icon.id = "moon";
  document.querySelector("body").className = "light_mode";
}
if (theme === "dark") {
  console.log("work");
  socialMedia.forEach((e) => {
    const temp = e.attributes.src.value.replace("_black.png", "_white.png");
    e.attributes.src.value = temp;
  });
} else if (
  document.querySelector("body").className === "light_mode" &&
  document.documentElement.scrollTop > 130
) {
  socialMedia.forEach((e) => {
    const temp = e.attributes.src.value.replace("_white.png", "_black.png");
    e.attributes.src.value = temp;
  });
}

window.addEventListener("click", (e) => {
  if (e.target === icon) {
    if (icon.id === "moon") {
      e.target.className = "bi bi-brightness-high-fill";
      e.target.id = "sun";
      mode = "dark";
      localStorage.setItem("theme", mode);
      document.querySelector("body").className = "dark_mode";
      changeNavDownColorToWhite();
      changeNavUpColorToWhite();
    } else {
      e.target.className = "bi bi-moon-stars-fill";
      e.target.id = "moon";
      document.querySelector("body").className = "light_mode";
      mode = "light";
      localStorage.setItem("theme", mode);
      changeNavDownColorToBlack();
      changeNavUpColorToBlack();
    }
  }
});

changeColorOnScroll();

/* 













*/
function changeNavUpColorToBlack() {
  logo.src = "./img/logo_black.png";
  icon.style.color = "black";
  line.forEach(function (e) {
    e.style.backgroundColor = "black";
  });
}

function changeNavDownColorToWhite() {
  socialMedia.forEach((e) => {
    const temp = e.attributes.src.value.replace("_black.png", "_white.png");
    e.attributes.src.value = temp;
  });
}

function changeNavDownColorToBlack() {
  socialMedia.forEach((e) => {
    const temp = e.attributes.src.value.replace("_white.png", "_black.png");
    e.attributes.src.value = temp;
  });
}

function changeNavUpColorToWhite() {
  logo.src = "./img/logo.png";
  line.forEach(function (e) {
    e.style.backgroundColor = "white";
  });

  icon.style.color = "white";
}

function changeColorOnScroll() {
  window.addEventListener("scroll", function () {
    if (document.querySelector("body").className === "dark_mode") {
    } else {
      let posScrollY = document.documentElement.scrollTop;

      // mengubah logo dan hamburgerMenu menjadi hitam
      if (posScrollY >= 820) {
        changeNavUpColorToBlack();
      }

      // mengubah logo social media menjadi hitam
      else if (posScrollY >= 130) {
        changeNavUpColorToWhite();
        changeNavDownColorToBlack();
      }

      // mengembalikan logo, hamburgerMenu dan logo social media menjadi seperti awal
      else {
        changeNavDownColorToWhite();
        changeNavUpColorToWhite();
      }
    }
  });
}
