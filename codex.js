const password = [];
const maxDigits = 4;

const passMap = {
  "2117": "a.html",
  "1983": "f.html",
  "1987": "f.html",
  "4032": "kuz.html", 
  "6774": "tenekekid.html",
  "6767": "six.html",
  "3131": "six.html",
  "3169": "six.html",
  "6931": "six.html",
  "6969": "six.html",
  "6967": "six.html",
  "6769": "six.html",
  "6731": "six.html",
  "3167": "six.html",
  "6161": "six.html",
  "1225": "off.html",
};

const errorSound = new Audio("error.wav");
const doorSound = new Audio("door.ogg");
const clickSound = new Audio("sound.wav");

const door = document.getElementById("door");
const doorImage = document.getElementById("doorImage");
let currentDestination = "";

document.querySelectorAll(".key").forEach(button => {
  button.addEventListener("click", () => {

    clickSound.currentTime = 0;
    clickSound.play();
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "del") {
      if (password.length > 0) {
        password.pop();
        document.getElementById(`digit${password.length + 1}`).textContent = "";
        clearErrorState();
      }
    } else if (action === "enter") {
      if (password.length === maxDigits) {
        const code = password.join('');
        if (passMap.hasOwnProperty(code)) {
          currentDestination = passMap[code];
          openDoorEffect();
        } else {
          showError();
        }
      }
    } else if (value && password.length < maxDigits) {
      password.push(value);
      document.getElementById(`digit${password.length}`).textContent = value;
      clearErrorState();
    }
  });
});

door.addEventListener("click", () => {
  if (currentDestination) {
    window.location.href = currentDestination;
  }
});

function openDoorEffect() {
  door.classList.add("visible");

  setTimeout(() => {
    doorImage.classList.add("shake");
    doorImage.src = "images/door-open.png";
    doorSound.currentTime = 0;
    doorSound.play();
  }, 1000);
}

function showError() {
  for (let i = 1; i <= maxDigits; i++) {
    document.getElementById(`digit${i}`).style.borderColor = "red";
    document.getElementById(`digit${i}`).style.color = "red";
  }

  errorSound.currentTime = 0;
  errorSound.play();

  setTimeout(() => {
    for (let i = 1; i <= maxDigits; i++) {
      document.getElementById(`digit${i}`).textContent = "";
      document.getElementById(`digit${i}`).style.borderColor = "#00ff66";
      document.getElementById(`digit${i}`).style.color = "#00ff66";
    }
    password.length = 0;
  }, 1800);
}

function clearErrorState() {
  for (let i = 1; i <= maxDigits; i++) {
    document.getElementById(`digit${i}`).style.borderColor = "#00ff66";
    document.getElementById(`digit${i}`).style.color = "#00ff66";
  }

  door.classList.remove("visible");
  doorImage.classList.remove("shake");
  doorImage.src = "images/door-closed.png";
  currentDestination = "";
}
