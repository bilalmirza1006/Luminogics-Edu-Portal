import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { useLocation, useParams } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleItemCheck = (index) => {
    const updatedItems = selectedItems.includes(index)
      ? selectedItems.filter((item) => item !== index)
      : [...selectedItems, index];

    setSelectedItems(updatedItems);

    const completionPercentage = (updatedItems.length / newstate.length) * 100;

    setLoading(completionPercentage);
  };

  const { state } = useLocation();
  const params = useParams();
  const newstate = state?.data;
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography variant={matches ? "h3" : "h4"} sx={{ display: "flex" }}>
        List of Items
      </Typography>
      {loading >= 0 && (
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Typography variant="h5" sx={{ marginRight: "8px" }}>
            {loading === 100 ? "Completed" : `${loading.toFixed(2)}%`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={loading}
            sx={{
              flexGrow: 1,
              height: "10px",
              borderRadius: "20px",
            }}
          />
        </Box>
      )}

      <List>
        {newstate.map((arr, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleItemCheck(index)}
            sx={{
              border: "2px solid gray",
              marginBottom: "4px",
              borderRadius: "100px",
            }}
          >
            <ListItemIcon>
              <Checkbox
                checked={selectedItems.includes(index)}
                onChange={() => handleItemCheck(index)}
              />
            </ListItemIcon>
            <ListItemText
              primary={arr.name}
              primaryTypographyProps={{
                variant: "h5",
                sx: {
                  textDecoration: selectedItems.includes(index)
                    ? "line-through"
                    : "none",
                  color: "gray",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default App;
