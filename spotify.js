//add secret keys using env
const spotifyKey = require("./keys.js");
//import spotify node module
let Spotify = require("node-spotify-api");

//invoke new spotify instance
let spotifyInstance = new Spotify({
  id: spotifyKey.id,
  secret: spotifyKey.secret
});

//make commands available to liri.js
module.exports = {
  //music search function with "The Sign" as default
  musicSearch: () => {
    let song = "";
    process.argv.length < 4
      ? (song = "The Sign")
      : (song = process.argv.slice(3).join(" "));
    spotifyInstance
      .search({
        type: "track",
        query: song
      }) //then function executes once promise is fulfilled
      .then(response => {
        // console.log(response.tracks.items[0]);

        //using template literal to easily format results from json
        console.log(`

            LIRI has asked spotify to help you out. 
            Please see below. 

            Spotify information about ${song}
            =================================

            Track Name: ${response.tracks.items[0].name}
            Artist: ${response.tracks.items[0].album.artists[0].name}
            Album: ${response.tracks.items[0].album.name}
            Like to song's profile: ${
              response.tracks.items[0].external_urls.spotify
            }
            `);
      }) //will take any errors generated and log them to the console using promise catch
      .catch(err => console.log(err));
  }
};
