import axios from 'axios';
const URL = `https://api.themoviedb.org/3`;
const API_KEY = `fe65f8e840e15d06c5c00bf13084da74`;

export class MoviesServices {
	async getListAllMovies(page) {
		try {
			const resp = await axios.get(
				`${URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${page}`
			);
			return resp.data;
		} catch (error) {
			return error;
		}
	}
}

export class MoviesSearchServices {
	async getSearchMovies(query, page) {
		try {
			const resp = await axios.get(
				`${URL}/search/movie?query=${query}&page=${page}&api_key=${API_KEY}&language=pt-BR`
			);
			return resp.data;
		} catch (error) {
			return error;
		}
	}
}
