const nama_member = document.querySelectorAll(".member_name p");
const imgMember = document.querySelectorAll(".member div");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const line = document.querySelectorAll(".line");
const logo = document.querySelector(".logo");
const socialMedia = document.querySelectorAll(".socialMedia");

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
    function temp(name) {
      return `<div id="${name}" class="inner">
    <div class="memberImg">
      <div class="colorBg"></div>
      <img src="img/${member.id}.jpg" alt="" />
    </div>

    <div class="memberTag">
      <div class="name">${member.id.toUpperCase()}</div>
      <p>Date of Birth: ${member.dataset.birth}</p>
    </div>
  </div>`;
    }

    document.querySelector(".member").innerHTML = temp(name);
  });
});

const posScrollYFirst = document.documentElement.scrollTop;

window.addEventListener("scroll", function () {
  // mendapatkan posisi scroll Y
  let posScrollY = document.documentElement.scrollTop;

  // mengubah logo dan hamburgerMenu menjadi hitam
  if (posScrollY >= 820) {
    logo.src = "./img/logo_black.png";
    line.forEach(function (e) {
      e.style.backgroundColor = "black";
    });
  }

  // mengubah logo social media menjadi hitam
  else if (posScrollY >= 130) {
    socialMedia[3].src = "./img/tiktok_black.png";
    socialMedia[2].src = "./img/youtube_black.png";
    socialMedia[1].src = "./img/twitter_black.png";
    socialMedia[0].src = "./img/ig_black.png";
    logo.src = "./img/logo.png";
    line.forEach(function (e) {
      e.style.backgroundColor = "white";
    });
  }

  // mengembalikan logo, hamburgerMenu dan logo social media menjadi seperti awal
  else {
    logo.src = "./img/logo.png";
    line.forEach(function (e) {
      e.style.backgroundColor = "white";
    });
    socialMedia[3].src = "./img/tiktok_white.png";
    socialMedia[2].src = "./img/youtube_white.png";
    socialMedia[1].src = "./img/twitter_white.png";
    socialMedia[0].src = "./img/ig_white.png";
  }
});

if (document.documentElement.scrollTop > 130) {
  socialMedia[3].src = "./img/tiktok_black.png";
  socialMedia[2].src = "./img/youtube_black.png";
  socialMedia[1].src = "./img/twitter_black.png";
  socialMedia[0].src = "./img/ig_black.png";
}

// window.addEventListener("scroll", function () {
//   let posScrollY = document.documentElement.scrollTop;
//   if (posScrollY >= 80) {
//     socialMedia[3].src = "./img/tiktok_black.png";
//   } else if (posScrollY >= 130) socialMedia[2].src = "./img/youtube_black.png";
//   else if (posScrollY >= 170) socialMedia[1].src = "./img/twitter_black.png";
//   else if (posScrollY >= 220) socialMedia[0].src = "./img/ig_black.png";
// });
