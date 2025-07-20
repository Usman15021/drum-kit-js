

// Detecting Button Press
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function () {
    makeSound(this.innerHTML);
  });
});

// Detecting Keyboard Press
document.addEventListener("keypress", e => makeSound(e.key));

function makeSound(key) {
  let soundFile;
  switch (key) {
    case "w": soundFile = "tom-1.mp3"; break;
    case "a": soundFile = "tom-2.mp3"; break;
    case "s": soundFile = "tom-3.mp3"; break;
    case "d": soundFile = "tom-4.mp3"; break;
    case "j": soundFile = "snare.mp3"; break;
    case "k": soundFile = "crash.mp3"; break;
    case "l": soundFile = "kick-bass.mp3"; break;
    default: console.log("Unrecognized key:", key); return;
  }
  new Audio(`sounds/${soundFile}`).play();
}
