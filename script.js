const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const seeMore = document.querySelector(".see-more");
const moreWorks = document.querySelectorAll(".more-work");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

seeMore.addEventListener("click", function () {
  moreWorks.forEach((moreWork) => {
    moreWork.classList.toggle("active-work");
  });
  if (seeMore.innerHTML === "See more") {
    seeMore.innerHTML = "See less";
  } else {
    seeMore.innerHTML = "See more";
  }
});


// ---------------------resonsive sidemenu ---------------------
openMenu.addEventListener("click", function () {
  document.querySelector(".sidemenu").style.right = "0px";
});

closeMenu.addEventListener("click", function () {
  document.querySelector(".sidemenu").style.right = "-200px";
});






// ---------------------------------form submit for google sheet-----------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzRZcUC9XWAg9fH78D-S8-S5Am5VqrDxiTVc-yRlSb55NN_b-ocMMDtlEs-2jnbRrAxhw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You, Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
