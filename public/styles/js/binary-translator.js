document.getElementById('to-binary').addEventListener('click', () => {
  const text = document.getElementById('text-input').value;
  const binary = text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
  document.getElementById('output').value = binary;
});

document.getElementById('to-text').addEventListener('click', () => {
  const binary = document.getElementById('text-input').value;
  const text = binary
    .split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('');
  document.getElementById('output').value = text;
});
