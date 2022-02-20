function handleKeyDown(event) {
  const { keyCode } = event;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const pressedKey = document.querySelector(`div[data-key="${keyCode}"]`);
  if (audio) {
    pressedKey.addEventListener('transitionend', (e) =>
      e.target.classList.remove('playing')
    );
    pressedKey.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
}

window.addEventListener('keydown', handleKeyDown);
