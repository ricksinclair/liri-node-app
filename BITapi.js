const moment = require("moment");
const axios = require("axios");

module.exports = {
  concertSearch: () => {
    const artist = process.argv.slice(3).join(" ");
    const bitURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
    axios.get(bitURL).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        console.log(` 
        LIRI has searched the Bands in Town database and has the following to report:

        ${artist} will be in  ${
          response.data[i].venue.region
        } and performing at  ${response.data[i].venue.name} on ${moment(
          response.data[i].datetime
        ).format("MM-DD-YYYY HH:MM")}

        `);
      }
    });
    //   .catch(err => console.log(`ERROR: ${err}`));
  }
};
