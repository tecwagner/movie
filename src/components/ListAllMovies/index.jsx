/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-lodash-debounce";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Typography from "@material-ui/core/Typography";
import { MoviesServices, MoviesSearchServices } from "../../services/movies";
import "./list.style.css";
import { FormataDate } from "../../utils/mask";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function ListAllMovies() {
  const moviesServices = new MoviesServices();
  const moviesSearchServices = new MoviesSearchServices();

  const [movies, setMovies] = useState([]);
  const [dates, setDates] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  const [totalResuts, settotalResuts] = useState(0);
  const [searchMovies, setSearchMovies] = useState("");
  const debouncedValue = useDebounce(searchMovies, 5000);
  const history = useHistory();

  const getSearchMovies = async () => {
    const res = await moviesSearchServices.getSearchMovies(searchMovies, page);

    if (res) {
      setMovies(res.results);
    }
  };

  const getListAllMovies = async () => {
    const res = await moviesServices.getListAllMovies(page);
    console.log("pageElse", res, dates, totalResuts);
    if (res) {
      setMovies(res.results);
      setDates(res.dates);
      setPage(res.page);
      setTotalPage(res.total_pages);
      settotalResuts(res.total_results);
    }
  };

  useEffect(async () => {
    if (searchMovies) {
      getSearchMovies();
    } else {
      getListAllMovies();
    }
  }, [debouncedValue, page]);

  const handleChange = (value) => {
    setSearchMovies(value);
    console.log("v", value);
  };

  const handleClick = (index) => {
    if (!(index < 0 && page === 0)) setPage((prev) => prev + index);
  };

  const handleDetails = (movie) => {
    history.push({ pathname: `/detalhes/${movie.id}`, state: movie });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <input
          type="text"
          placeholder="Escolha o filme..."
          onChange={(e) => handleChange(e.target.value)}
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
                          "https://image.tmdb.org/t/p/w500/" +
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
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            {page > 1 ? (
              <Button
                className="button-anterior"
                size="small"
                color="primary"
                variant="contained"
                onClick={(e) => handleClick(-1)}
              >
                Anterior
              </Button>
            ) : (
              <Button
                className="button-anterior"
                size="small"
                variant="contained"
                disabled
              >
                Anterior
              </Button>
            )}
            {page !== totalPages ? (
              <Button
                className="button-proximo"
                size="small"
                color="primary"
                variant="contained"
                onClick={(e) => handleClick(+1)}
              >
                Próximo
              </Button>
            ) : (
              <Button
                className="button-proximo"
                size="small"
                variant="contained"
                disabled
              >
                Próximo
              </Button>
            )}
          </Grid>
          <div></div>
        </Container>
      </main>
    </React.Fragment>
  );
}
