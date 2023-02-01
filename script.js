"use strict";

const shareBtn = document.querySelector(".main__share-btn");
const shareBtnPopup = document.querySelector(".main__share-btn--pop-up");
const popUp = document.querySelector(".main__pop-up");
const profileBox = document.querySelector(".main__profile-box");
const mainText = document.querySelector(".main__text");

shareBtn.addEventListener("click", function () {
  popUp.classList.toggle("unhide--pop-up");

  if (window.screen.width <= 400) {
    profileBox.classList.toggle("hide");
    shareBtnPopup.classList.toggle("unhide");
    mainText.style.marginBottom = "4rem";
  }
});

shareBtnPopup.addEventListener("click", function () {
  popUp.classList.remove("unhide--pop-up");

  shareBtnPopup.classList.remove("unhide");

  if (window.screen.width <= 400) {
    profileBox.classList.remove("hide");
  }
});
