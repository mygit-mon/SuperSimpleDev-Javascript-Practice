function turnonoffHandler(selector) {
  const allButtons = document.querySelectorAll('.gaming-btn');
  allButtons.forEach((button) => button.classList.remove('is-toggled'));

  console.log(allButtons);

  const button = document.querySelector(`.${selector}`);
  button.classList.add('is-toggled');
}
