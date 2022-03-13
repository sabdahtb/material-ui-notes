import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";
import React from "react";

export default function Cards({ note, handleDelete }) {
  return (
    <div>
      <Card>
        <CardHeader
          title={note.title}
          subheader={note.category}
          action={
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: red[600],
                  color: "#fefefe",
                },
              }}
              onClick={() => handleDelete(note.id)}
            >
              <DeleteOutlined />
            </IconButton>
          }
          avatar={
            <Avatar
              sx={{
                backgroundColor: () => {
                  if (note.category === "money") {
                    return green[400];
                  }
                  if (note.category === "todo") {
                    return yellow[400];
                  }
                  if (note.category === "reminder") {
                    return red[400];
                  }
                  if (note.category === "works") {
                    return blue[400];
                  }
                },
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
        />
        <CardContent>
          <Typography cariant="body2" color="textSecondary">
            {note.detail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
