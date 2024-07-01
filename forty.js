function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("The Beatles", "AbbeyRoad");
var album2 = make_album("Pink Floyed", "Darkside of the Moon", 10);
var album3 = make_album("Led Zeppelin", "IV", 8);
console.log(album1);
console.log(album2);
console.log(album3);
