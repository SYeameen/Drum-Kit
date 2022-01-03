function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  console.log(key);

  if (!audio) {
    return; //stop function from running all together
  }
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransitiom(e) {
  if (e.propertyName !== "transform") {
    return; //skip it if its not transform
  }
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransitiom));
