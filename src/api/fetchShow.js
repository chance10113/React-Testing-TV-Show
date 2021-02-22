import axios from "axios"

 export const fetchShow = () => {
    axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        //   console.log("res",res)
        return res;
      })
      .catch ((error) => {
        console.log("fetchShows failed", error)
      })
  };

  export default fetchShow