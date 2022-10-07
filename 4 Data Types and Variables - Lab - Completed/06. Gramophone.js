function gramophone(bandName, albumName, songName) {
  let rotations = (albumName.length * bandName.length * songName.length) / 2;
  let rotations2 = rotations / 2.5;
  console.log(`The plate was rotated ${Math.ceil(rotations2)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
