const inputs = document.querySelectorAll('.controls input');

function hanldeUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener('change', hanldeUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', hanldeUpdate));
