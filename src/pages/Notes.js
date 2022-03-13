import React from "react";
import { Alert, Container } from "@mui/material";
import Cards from "../components/Card";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const useStyles = makeStyles({
  links: {
    color: "white",
  },
});

export default function Notes({ notes, delNote }) {
  const classes = useStyles();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want to delete note ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        delNote(id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Note Has Been Deleted",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  if (notes.length === 0) {
    return (
      <div>
        <Container maxwidth="xs">
          <Alert variant="filled" severity="info">
            There's no Notes yet.{" "}
            <Link to="/create" className={classes.links}>
              Add
            </Link>{" "}
            notes here.
          </Alert>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container maxWidth="xl">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {notes.map((note, index) => (
              <div key={index}>
                <Cards note={note} handleDelete={handleDelete} />
              </div>
            ))}
          </Masonry>
        </Container>
      </div>
    );
  }
}
