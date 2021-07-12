import axios from "axios";
const URL = `https://api.themoviedb.org/3`;
const API_KEY = `fe65f8e840e15d06c5c00bf13084da74`;

export class MoviesServices {
  async getListAllMovies(page) {
    console.log("page", page);
    try {
      const resp = await axios.get(
        `${URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${page}`
      );
      console.log("allMovi", resp);
      return resp.data;
    } catch (error) {
      return console.log(error);
    }
  }
}

export class MoviesSearchServices {
  async getSearchMovies(query, page) {
    console.log("que", query);
    try {
      const resp = await axios.get(
        `${URL}/search/movie/?api_key=${API_KEY}&language=pt-BR&page=${page}&query=${query}`
      );
      console.log("search", resp);
      return resp.data;
    } catch (error) {
      return console.log(error);
    }
  }
}
