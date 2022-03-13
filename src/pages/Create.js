import React, { useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  box: {
    marginTop: 30,
  },
});

export default function Create({ addNotes }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");
  const [ertitle, setErtitle] = useState(false);
  const [erdetail, setErdetail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErtitle(false);
    setErdetail(false);

    let x = Math.floor(Math.random() * 100000 + 1000);

    if (title === "") {
      setErtitle(true);
    }
    if (detail === "") {
      setErdetail(true);
    }

    if (title && detail) {
      const data = { title: title, detail: detail, category: category, id: x };
      addNotes(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Note Has Been Added",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/");
    }
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h5" color="secondary">
          Create Notes
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className={classes.box}>
            <TextField
              id="title"
              label="Note Title"
              variant="outlined"
              color="secondary"
              required
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              error={ertitle}
            />
          </div>
          <div className={classes.box}>
            <TextField
              id="detail"
              label="Note Details"
              variant="outlined"
              color="secondary"
              multiline
              rows={5}
              required
              fullWidth
              onChange={(e) => setDetail(e.target.value)}
              error={erdetail}
            />
          </div>

          <div className={classes.box}>
            <FormControl color="secondary">
              <FormLabel>Note Category</FormLabel>
              <RadioGroup onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel
                  value="money"
                  control={<Radio color="secondary" />}
                  label="Money"
                />
                <FormControlLabel
                  value="reminder"
                  control={<Radio color="secondary" />}
                  label="Reminder"
                />
                <FormControlLabel
                  value="todo"
                  control={<Radio color="secondary" />}
                  label="To-do"
                />
                <FormControlLabel
                  value="works"
                  control={<Radio color="secondary" />}
                  label="Works"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className={classes.box}>
            <Button type="submit" variant="contained" color="secondary">
              Add Notes
              <ChevronRightIcon />
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
