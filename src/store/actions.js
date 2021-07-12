// import axios from "axios";
// const URL = `https://api.themoviedb.org/3`;
// const API_KEY = `fe65f8e840e15d06c5c00bf13084da74`;

// export const getListAllMovies = async () => {
//   try {
//     const request = await axios.get(
//       `${URL}/movie/upcoming?${API_KEY}&language=pt-BR&page=1`
//     );
//     console.log("allMovi", request);
//     return {
//       type: "GET_UPCOMING",
//       payload: request.data.results,
//     };
//   } catch (error) {
//     return console.log(error);
//   }
// };
