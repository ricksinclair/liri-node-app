let axios = require("axios");

let movie = "";

module.exports = {
  movieSearch: () => {
    process.argv.length < 4
      ? (movie = "Mr. Nobody")
      : (movie = process.argv.slice(3).join(" "));
    let queryURL = `http://www.omdbapi.com/?t=${movie}&plot=short&apikey=trilogy`;
    axios
      .get(queryURL)
      .then(response => {
        console.log(`
            LIRI has searched the OMDB api and has the following to report:


            Movie: ${movie}
            Release Year: ${response.data.Released}
            Rated: ${response.data.Rated}
            Language: ${response.data.Language}
            Country:${response.data.Country}
            Cast: ${response.data.Actors}
            Plot: ${response.data.Plot}
            IMDB Rating: ${response.data.Ratings[0].Value}
            Rotten Tomatoes:${response.data.Ratings[1].Value}


            `);
      })
      .catch(err => console.log(`ERROR: ${err}`));
  }
};
