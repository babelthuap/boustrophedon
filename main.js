const textInput = document.getElementById('text');
const widthInput = document.getElementById('width');
const container = document.getElementById('container');

textInput.addEventListener('keydown', () => setTimeout(format, 0));
widthInput.addEventListener('change', format);

format();
textInput.focus();

function format() {
  container.innerHTML = '';

  const width = parseInt(widthInput.value);
  const height = Math.ceil(textInput.value.length / width);
  const text = textInput.value.padEnd(width * height);

  for (let i = 0, reverse = false; i < text.length;
       i += width, reverse = !reverse) {
    const rowChars = text.slice(i, i + width).split('');
    const rowDiv = createDiv('row');

    if (reverse) {
      rowChars.reverse();
      rowDiv.classList.add('reverse');
    }

    for (const char of rowChars) {
      const charDiv = createDiv('char');
      charDiv.innerText = char;
      rowDiv.appendChild(charDiv);
    }

    container.appendChild(rowDiv);
  }
}

function createDiv(classname) {
  const div = document.createElement('div');
  div.classList.add(classname);
  return div;
}
