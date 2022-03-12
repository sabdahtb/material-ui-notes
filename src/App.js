import { Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  testo: {
    marginTop: 20,
    marginLeft: 30,
    backgroundColor: yellow[400],
  },
});

export default function App() {
  const classes = useStyle();

  return (
    <div>
      <Typography variant="h1" color="secondary" className={classes.testo}>
        Halooo MAsseehhh
      </Typography>
    </div>
  );
}
