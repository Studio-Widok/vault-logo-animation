import $ from 'cash-dom';

const letters = [];
$('.letter').each((_index, DOMElement) => {
  letters.push($(DOMElement));
});

const smallLetters = [];
$('.letter-small').each((_index, DOMElement) => {
  smallLetters.push($(DOMElement));
});

const key = $('#key');

let time = 500;
function queue(callback, duration = 0) {
  setTimeout(callback, time);
  time += duration;
}

window.addEventListener('load', () => {
  queue(() => key.addClass('active'), 1000);
  queue(() => key.css({ transition: '0.5s' }));

  time += 200;

  queue(() => {
    key.addClass('active-2');
  }, 500);

  time -= 400;

  letters.forEach(letter => {
    queue(() => {
      letter.toggleClass('active');
    }, 400);
    time -= 200;
  });

  time += 300;

  queue(() => {
    key.addClass('active-3');
  }, 500);

  time -= 300;

  smallLetters.forEach(letter => {
    queue(() => {
      letter.toggleClass('active');
    }, 200);
    time -= 185;
  });
});
