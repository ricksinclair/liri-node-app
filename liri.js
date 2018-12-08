const spotify = require("spotify.js");
const movies = require("OMDBapi.js");
const concerts = require("BITapi.js");
const random = require("random.js");
const command = process.argv[2];

command === "spotify-this-song"
  ? spotify.musicSearch()
  : command === "movie-this"
  ? movies.movieSearch()
  : command === "concert-this"
  ? concerts.concertSearch()
  : command === "do-what-it-says"
  ? random.randomSearch()
  : console.log(`
Invalid Input. Please try one of the following commands:
concert-this
spotify-this-song
movie-this
do-what-it-says
`);
