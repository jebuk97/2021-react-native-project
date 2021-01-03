import Axios from 'axios';
//const got = require("axios");

const baseUrl = "https://www.fotmob.com";


class Fotmob {
  constructor() {
    this.matchesUrl = baseUrl + "/matches?";
    this.leaguesUrl = baseUrl + "/leagues?";
    this.teamsUrl = baseUrl + "/teams?";
    this.playerUrl = baseUrl + "/playerData?";
    this.matchDetailsUrl = baseUrl + "/matchDetails?";
    this.searchUrl = baseUrl + "/searchapi/";
    const arr = [];
    this.map = new Map();
  }

  checkDate(date) {
    var re = new RegExp("(20\d{2})(\d{2})(\d{2})");
    return re.exec(date);
  }

//   getMatchesByDate(date) {
//     if (this.checkDate(date) != null) {
//       let url = this.matchesUrl + `date=${date}`;
//       (async () => {
//         try {
//           const response = await got(url, { cache: this.map });
//           console.log(response.isFromCache);
//           console.log(response.body);
//           return response.body;
//         } catch (error) {
//           console.log(error.response.body);
//         }
//       })();
//     }
//   }

  getMatchesByDate = async(date) => {
        let url = this.matchesUrl + `date=${date}` + '&timeZone=Asia/Seoul';
        console.log(url);
        const response = await Axios.get(url);
        return response.data['leagues'];
  }

  getLeague(id, tab="overview", type="league", timeZone="America/New_York") {
    let url =
      this.leaguesUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
    console.log(url);
    (async () => {
      try {
        const response = await got(url, { cache: this.map });
        console.log(response.isFromCache);
        console.log(response.body);
        return response.body;
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }

  getTeam(id, tab="overview", type="team", timeZone="America/New_York") {
    let url =
      this.teamsUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
    console.log(url);
    (async () => {
      try {
        const response = await got(url, { cache: this.map });
        console.log(response.isFromCache);
        console.log(response.body);
        return response.body;
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }

  getPlayer = async(id) => {
    let url = this.playerUrl + `id=${id}`;
    console.log(url);
        const response = await Axios.get(url);
        return response.data;
  }

  getMatchDetails = async(matchId) => {
    let url = this.matchDetailsUrl + `matchId=${matchId}`;
    console.log(url);
    const response = await Axios.get(url);
    return response.data;
  }
}

export default Fotmob;