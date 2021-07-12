import React from "react";
import ListMoviesComponent from "../../components/ListAllMovies";

export default function ListAllMovies() {
  return (
    <div className="title">
      <h1> Filmes em Cartaz </h1>
      <ListMoviesComponent />
    </div>
  );
}
