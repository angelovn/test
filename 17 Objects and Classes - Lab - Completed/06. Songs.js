// function song(arr) {
//   class Song {
//     constructor(typeList, name, time) {
//       this.typeList = typeList;
//       this.nameOfSong = name;
//       this.timeOfSong = time;
//     }
//   }
//   let arrSongs = [];
//   let numberOfSong = arr.shift();
//   let typeL = arr.pop();
//   for (let songData of arr) {
//     let token = songData.split("_");
//     let type = token[0];
//     let name = token[1];
//     let time = token[2];
//     let songs = new Song(type, name, time);
//     arrSongs.push(songs);
//   }
//   if (typeL === "all") {
//     arrSongs.forEach((i) => console.log(i.nameOfSong));
//   } else {
//     let filtered = arrSongs.filter((i) => i.typeList === typeL);
//     filtered.forEach((i) => console.log(i.nameOfSong));
//   }
// }
function songs(arr) {
  let numberSongs = arr.shift();
  let type = arr.pop();
  class Songs {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  for (let el of arr) {
    let [typeList, name, time] = el.split("_");
    let song = new Songs(typeList, name, time);
    if (song.typeList === type) {
      console.log(song.name);
    }
    if (type === "all") {
      console.log(song.name);
    }
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
