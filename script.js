document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.game-box');
  const thoughtText = document.getElementById('thought-text');
  if (!thoughtText) {
    console.error('THOUGHT BOX (id="thought-text") bulunamadı!');
  }
  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      if (thoughtText) {
        const thought = box.dataset.thought || "";
        thoughtText.textContent = thought;
      }
    });
    box.addEventListener('mouseleave', () => {
      if (thoughtText) {
        thoughtText.textContent = "Hover over any of the games right next to this box to see my thoughts about it";
      }
    });
  });
});



const robot = document.getElementById('robot');
const sfx = document.getElementById('robotSfx');
const ricardo = document.getElementById('ricardoNeo');
const sfx1 = document.getElementById('ricardoSfx');
const chatbox = document.getElementById('chatbox');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const soundEffect = document.getElementById('soundEffect');
const character = document.getElementById('character');

let robotClicked = false;
let ricardoClicked = false;
let ricardoTransformed = false;

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('robotClicked') === 'true') {
    robot.src = 'images/dust.png';
    robot.style.cursor = 'images/cursorhover.png';
    robotClicked = true;
  }
});

robot.addEventListener('mouseenter', () => {
  if (robotClicked) return;
  robot.src = 'images/png2.gif';
  robot.style.cursor = 'url(images/bomb.png), auto';
});

robot.addEventListener('mouseleave', () => {
  if (robotClicked) return;
  robot.src = 'images/png1.gif';
});

robot.addEventListener('click', () => {
  if (robotClicked) return;
  robotClicked = true;

  localStorage.setItem('robotClicked', 'true');

  sfx.currentTime = 0;
  sfx.play();

  robot.src = 'images/explosion.gif';

  setTimeout(() => {
    window.location.href = 'why.html';
  }, 500);
});


function showGameDetails(title, imgSrc, score, desc) {
  document.getElementById('details-title').innerText = title;
  document.getElementById('details-image').src = imgSrc;
  document.getElementById('details-score').innerText = score;
  document.getElementById('details-description').innerText = desc;
  document.getElementById('game-details').classList.remove('hidden');
}

  const specialNames = ['patates', 'kuzey', 'mba', 'manter', 'budgie', 'richard'];

  document.querySelectorAll('.hoverable').forEach(img => {
    const src = img.getAttribute('src');
    const fileName = src.split('/').pop();     
    const baseName = fileName.split('.')[0];     

    if (specialNames.includes(baseName)) {
      const hoverSrc = `images/hover-${baseName}.gif`;

      img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverSrc);
      });

      img.addEventListener('mouseleave', () => {
        img.setAttribute('src', src);
      });
    }
  });