
import { Paper, styled, useMediaQuery, useTheme } from "@mui/material";


// const theme = useTheme();
// export const matches = useMediaQuery(theme.breakpoints.up("sm"));


export const weeks = [
  { name: "Week One", list: ["To Do List"], id: 1 },
  { name: "Week Two", list: ["To Do List"], id: 2 },
  { name: "Week Three", list: ["To Do List"], id: 3 },
  { name: "Week Four", list: ["To Do List"], id: 4 },
  { name: "Week Five", list: ["To Do List"], id: 5 },
  { name: "Week Six", list: ["To Do List"], id: 6 },
];

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',

}));