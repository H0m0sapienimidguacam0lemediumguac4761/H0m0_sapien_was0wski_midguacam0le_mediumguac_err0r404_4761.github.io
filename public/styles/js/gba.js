const gba = new GameBoyAdvance();
gba.setCanvas(document.getElementById('gba-canvas'));

document.getElementById('load-rom').addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const rom = new Uint8Array(reader.result);
    gba.loadROMFromFile(rom);
    gba.runStable();
  };

  reader.readAsArrayBuffer(file);
});
