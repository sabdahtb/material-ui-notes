import { createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Notes from "./pages/Notes";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#DC143C",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNotes = (data) => {
    setNotes((prevNotes) => [...prevNotes, data]);
  };

  const delNote = (id) => {
    const filNotes = notes.filter((note) => note.id !== id);
    setNotes(filNotes);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<Notes notes={notes} delNote={delNote} />}
              />
              <Route path="/create" element={<Create addNotes={addNotes} />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}
