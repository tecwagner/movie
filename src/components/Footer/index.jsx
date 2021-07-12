import React from "react";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer className={`footer`}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      ></Typography>
      <Copyright />
    </footer>
  );
}
