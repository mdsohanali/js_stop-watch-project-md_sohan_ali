let dispalyTime = document.querySelector("#displayTime");
let playPauseButton = document.querySelector("#playPause");
let resetButton = document.querySelector("#reset");
let splitButton = document.querySelector("#splitTime");
let timeSplits = document.querySelector("#timeSplits");
let timer = null;

let [hours, minites, secound, miliSecound] = [0, 0, 0, 0];

function watch() {
  miliSecound++;
  if (miliSecound == 10) {
    miliSecound = 0;
    secound++;
    if (secound == 60) {
      secound = 0;
      minites++;
      if (minites == 60) {
        minites = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minites < 10 ? "0" + minites : minites;
  let s = secound < 10 ? "0" + secound : secound;
  let mi = miliSecound < 10 ? "0" + miliSecound : miliSecound;

  dispalyTime.innerHTML = h + ":" + m + ":" + s + ":" + mi;
}

playPauseButton.addEventListener("click", function () {
  if (timer === null) {
    timer = setInterval(watch, 100);
    playPauseButton.textContent = "Pause";
  } else {
    clearInterval(timer);
    timer = null;
    playPauseButton.textContent = "Play";
  }
});

resetButton.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  [hours, minites, secound, miliSecound] = [0, 0, 0, 0];
  dispalyTime.innerHTML = "00:00:00:00";
  playPauseButton.textContent = "Play";
  timeSplits.innerHTML = ""; // Clear the list of time splits
});

splitButton.addEventListener("click", function () {
  let currentTime = dispalyTime.innerHTML;
  let listItem = document.createElement("li");
  listItem.textContent = currentTime;
  if (timeSplits.children.length >= 5) {
    timeSplits.removeChild(timeSplits.firstChild); // Remove the oldest split time
  }
  timeSplits.appendChild(listItem);
});
