const letters = Array.from(document.getElementsByClassName('letter'));
const smallLetters = Array.from(document.getElementsByClassName('letter-small'));
const key = document.getElementById('key');

let time = 500;
function queue(callback, duration = 0) {
  setTimeout(callback, time);
  time += duration;
}

window.addEventListener('load', () => {
  queue(() => key.classList.add('active'), 800);
  queue(() => key.style.transition = '0.5s');
  queue(() => key.classList.add('active-2'), 100);
  letters.forEach(letter => queue(() => letter.classList.add('active'), 200));
  time += 300;
  queue(() => key.classList.add('active-3'), 200);
  smallLetters.forEach(letter => queue(() => letter.classList.add('active'), 15));
});
