const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const i = document.getElementById('fa');
//toggle navigation

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');

  // changing bars to times
  if (document.body.classList.contains('show-nav')) {
    toggle.innerHTML = ` <i id="fa" class="fa fa-times fa-2x"></i>`;
  } else {
    toggle.innerHTML = ` <i id="fa" class="fa fa-bars fa-2x"></i>`;
  }
});

//show modal

open.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

//remove modal

close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

//hiding modal while clicking outside

window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

