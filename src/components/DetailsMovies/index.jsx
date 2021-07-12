/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./details.style.css";
import { useHistory, Link } from "react-router-dom";

export default function DetailsMovies() {
  const history = useHistory();
  const movie = history.location.state;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className="cardGridDetails" maxWidth="md">
          <CardMedia
            className="cardMediaDetails"
            image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            title={movie.title}
          />
          <div className={`cardDetailsOverview`}>
            <Typography className={`cardOverview`}>{movie.overview}</Typography>
          </div>
        </Container>
        <Grid className="button-sair">
          <Link
            to={`/`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button size="small" variant="contained" color="secondary">
              Voltar
            </Button>
          </Link>
        </Grid>
      </main>
    </React.Fragment>
  );
}
