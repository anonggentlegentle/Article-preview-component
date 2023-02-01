"use strict";

const shareBtn = document.querySelector(".main__share-btn");
const shareBtnPopup = document.querySelector(".main__share-btn--pop-up");
const popUp = document.querySelector(".main__pop-up");
const profileBox = document.querySelector(".main__profile-box");
const mainText = document.querySelector(".main__text");

shareBtn.addEventListener("click", function () {
  popUp.classList.toggle("unhide--pop-up");

  if (window.screen.width <= 400) {
    profileBox.classList.add("hide");
    shareBtnPopup.classList.add("unhide");
    mainText.style.marginBottom = "3rem";
  }
});

shareBtnPopup.addEventListener("click", function () {
  popUp.classList.remove("unhide--pop-up");

  shareBtnPopup.classList.remove("unhide");

  if (window.screen.width <= 400) {
    profileBox.classList.remove("hide");
  }
});
