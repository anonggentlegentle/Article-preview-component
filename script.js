"use strict";

const shareBtn = document.querySelector(".main__share-btn");
const shareBtnPopup = document.querySelector(".main__share-btn--pop-up");
const popUp = document.querySelector(".main__pop-up");
const profileBox = document.querySelector(".main__profile-box");
const mainText = document.querySelector(".main__text");
const shareBtnIcon = document.querySelector(".main__share-icon");

shareBtn.addEventListener("click", function (e) {
  popUp.classList.toggle("unhide--pop-up");

  shareBtn.classList.toggle("shareBtnBackground");

  shareBtnIcon.classList.toggle("shareBtnFill");

  if (window.screen.width <= 400) {
    profileBox.classList.add("hide");
    shareBtnPopup.classList.add("unhide");
    mainText.classList.add("marginBottom");
  }
});

shareBtnPopup.addEventListener("click", function () {
  popUp.classList.remove("unhide--pop-up");

  shareBtnPopup.classList.remove("unhide");

  mainText.classList.remove("marginBottom");

  shareBtn.classList.remove("shareBtnBackground");

  shareBtnIcon.classList.remove("shareBtnFill");

  if (window.screen.width <= 400) {
    profileBox.classList.toggle("hide");
  }
});

const resetOnResize = function () {
  popUp.classList.remove("unhide--pop-up");
  profileBox.classList.remove("hide");
  shareBtnPopup.classList.remove("unhide");
  mainText.classList.remove("marginBottom");
};

window.onresize = resetOnResize;
