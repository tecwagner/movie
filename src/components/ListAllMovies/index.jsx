import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDebounce} from 'use-lodash-debounce';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import {MoviesServices, MoviesSearchServices} from '../../services/movies';
import {FormataDate} from '../../utils/mask';
import './list.style.css';

export default function ListAllMovies() {
	const moviesServices = new MoviesServices();
	const moviesSearchServices = new MoviesSearchServices();
	const history = useHistory();

	const [movies, setMovies] = useState([]);
	const [dates, setDates] = useState({});
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [total_results, setTotalResults] = useState(0);
	const [searchMovies, setSearchMovies] = useState('');
	const debouncedValue = useDebounce(searchMovies, 500);

	// const getResultInfo = () => ({
	// 	total_results
	// })

	const getSearchMovies = async () => {
		const res = await moviesSearchServices.getSearchMovies(searchMovies, page);
		if (res) {
			console.log('list', res);
			setMovies(res.results);
			setPage(res.page);
			setTotalPages(res.total_pages);
			setTotalResults(res.total_results);
		}
	};

	const getListAllMovies = async () => {
		const res = await moviesServices.getListAllMovies(page);
		if (res) {
			setMovies(res.results);
			setDates(res.dates);
			setPage(res.page);
			setTotalPages(res.total_pages);
			setTotalResults(res.total_results);
		}
	};

	useEffect(() => {
		async function fetchData() {
			console.log('carregando filter:', searchMovies);
			if (searchMovies) {
				await getSearchMovies();
			} else {
				await getListAllMovies();
			}
		}

		fetchData();
	}, [debouncedValue, page]);

	const handleChange = (event) => {
		setSearchMovies(event.target.value);
	};

	const handleButtonClick = (increment) => {
		const nextPage = page + increment;
		if (nextPage >= 1 && nextPage <= totalPages) {
			setPage(nextPage);
		}
	};

	const handleDetails = (movie) => {
		history.push({pathname: `/detalhes/${movie.id}`, state: movie});
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<div>
				<InputBase
					type="text"
					placeholder="Escolha o filme..."
					onChange={handleChange}
					value={searchMovies}
				/>
			</div>
			<main>
				<Container className={`cardGrid`} maxWidth="lg">
					<Grid container spacing={2}>
						{movies.map((movie) => (
							<Grid item key={movie.id} xs={12} sm={6} md={4}>
								<div onClick={() => handleDetails(movie)}>
									<Card className={`card`}>
										{movie.backdrop_path != null ? (
											<CardMedia
												className={`cardMedia`}
												image={
													'https://image.tmdb.org/t/p/w500/' +
													movie.backdrop_path
												}
												title={movie.title}
											/>
										) : (
											<CardMedia className={`cardIcon`}>
												<PhotoCameraIcon />
											</CardMedia>
										)}

										<CardContent className={`cardContent`}>
											<Typography className={`cardTitle`}>
												{movie.title}
											</Typography>
											<Typography className={`cardRealese`}>
												Lançamento {FormataDate(movie.release_date)}
											</Typography>
										</CardContent>
									</Card>
								</div>
							</Grid>
						))}
					</Grid>
					<Grid
						className={`button`}
						style={{color: 'inherit', textDecoration: 'inherit'}}
					>
						<Button
							className="button-anterior"
							size="small"
							color="primary"
							variant="contained"
							onClick={() => handleButtonClick(-1)}
							disabled={page <= 1}
						>
							Anterior
						</Button>
						<Button
							className="button-proximo"
							size="small"
							color="primary"
							variant="contained"
							onClick={() => handleButtonClick(1)}
							disabled={page >= totalPages}
						>
							Próximo
						</Button>
					</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
}
