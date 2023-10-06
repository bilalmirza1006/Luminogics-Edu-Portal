// // // import React from "react";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// import jwtDecode from "jwt-decode";

// // // import { QueueSharp, Sort } from "@mui/icons-material";

// // // // const showSuccessToast = () => {
// // // //   toast.success("Success!", {
// // // //     position: toast.POSITION.TOP_RIGHT,
// // // //     autoClose: 3000,
// // // //     hideProgressBar: false,
// // // //     closeOnClick: true,
// // // //     pauseOnHover: true,
// // // //     draggable: true,
// // // //   });
// // // // };

// // // // function DomyScreen() {
// // // //   return (
// // // //     <div>
// // // //       <button onClick={showSuccessToast}>Show Success Toast</button>
// // // //       <ToastContainer />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DomyScreen;

// // // class Stack {
// // //   constructor() {
// // //     this.array = [];
// // //   }
// // //   peek() {
// // //     return this.array[this.array.length - 1];
// // //   }
// // //   push(value) {
// // //     this.array.push(value);
// // //     return this;
// // //   }
// // //   pop() {
// // //     this.array.pop();
// // //     return this;
// // //   }
// // // }

// // // const myStack = new Stack();
// // // myStack.peek();
// // // myStack.push("google");
// // // myStack.push("udemy");
// // // myStack.push("discord");
// // // myStack.peek();
// // // myStack.pop();
// // // myStack.pop();
// // // myStack.pop();

// // // //third Discord
// // // //second Udemy
// // // //first google

// // // // Queue
// // // class Node {
// // //   constructor(value) {
// // //     this.value = value;
// // //     this.next = null;
// // //   }
// // // }

// // // class Queue {
// // //   constructor() {
// // //     this.first = null;
// // //     this.last = null;
// // //     this.length = 0;
// // //   }
// // //   peek() {
// // //     return this.first;
// // //   }
// // //   enqueue(value) {
// // //     const newNode = new Node(value);
// // //     if (this.length === 0) {
// // //       this.first = newNode;
// // //       this.last = newNode;
// // //     } else {
// // //       this.last.next = newNode;
// // //       this.last = newNode;
// // //     }
// // //     this.length++;
// // //     return this;
// // //   }
// // //   dequeue() {
// // //     if (!this.first) {
// // //       return null;
// // //     }
// // //     if (this.first === this.last) {
// // //       this.last = null;
// // //     }
// // //     const holdingPointer = this.first;
// // //     this.first = this.first.next;
// // //     this.length--;
// // //     return this;
// // //   }
// // //   //isEmpty;
// // // }

// // // const myQueue = new Queue();
// // // myQueue.peek();
// // // myQueue.enqueue("Joy");
// // // myQueue.enqueue("Matt");
// // // myQueue.enqueue("Pavel");
// // // myQueue.peek();
// // // myQueue.dequeue();
// // // myQueue.dequeue();
// // // myQueue.dequeue();
// // // myQueue.peek();

// // // // bubble Sort

// // // const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// // // function bubbleSort(array) {
// // //   const length = array.length;
// // //   for (let i = 0; i < length; i++) {
// // //     for (let j = 0; j < length; j++) {
// // //       if (array[j] > array[j + 1]) {
// // //         let temp = array[j];
// // //         array[j] = array[j + 1];
// // //         array[j + 1] = temp;
// // //       }
// // //     }
// // //   }
// // // }

// // // bubbleSort(numbers);
// // // consol;

// // // // selection

// // // const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// // // function selectionSort(array) {
// // //   const length = array.length;
// // //   for (let i = 0; i < length; i++) {
// // //     let min = i;
// // //     let temp = array[i];
// // //     for (let j = i + 1; j < length; j++) {
// // //       if (array[j] < array[min]) {
// // //         min = j;
// // //       }
// // //     }
// // //     array[i] = array[min];
// // //     array[min] = temp;
// // //   }
// // //   return array;
// // // }

// // // selectionSort(numbers);
// // // console.log(numbers);

// // // // insertion

// // // const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// // // function insertionSort(array) {
// // //   const length = array.length;
// // //   for (let i = 0; i < length; i++) {
// // //     if (array[i] < array[0]) {
// // //       array.unshift(array.splice(i, 1)[0]);
// // //     } else {
// // //       if (array[i] < array[i - 1]) {
// // //         for (var j = 1; j < i; j++) {
// // //           if (array[i] >= array[j - 1] && array[i] < array[j]) {
// // //             array.splice(j, 0, array.splice(i, 1)[0]);
// // //           }
// // //         }
// // //       }
// // //     }
// // //   }
// // // }

// // // insertionSort(numbers);
// // // console.l;

// // import * as React from "react";
// // import { styled, alpha } from "@mui/material/styles";
// // import Button from "@mui/material/Button";
// // import Menu from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";
// // import EditIcon from "@mui/icons-material/Edit";
// // import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// // const StyledMenu = styled((props) => (
// //   <Menu
// //     elevation={0}
// //     anchorOrigin={{
// //       vertical: "bottom",
// //       horizontal: "right",
// //     }}
// //     transformOrigin={{
// //       vertical: "top",
// //       horizontal: "right",
// //     }}
// //     {...props}
// //   />
// // ))(({ theme }) => ({
// //   "& .MuiPaper-root": {
// //     borderRadius: 6,
// //     marginTop: theme.spacing(1),
// //     minWidth: 180,
// //     color:
// //       theme.palette.mode === "light"
// //         ? "rgb(55, 65, 81)"
// //         : theme.palette.grey[300],
// //     boxShadow:
// //       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
// //     "& .MuiMenu-list": {
// //       padding: "4px 0",
// //     },
// //     "& .MuiMenuItem-root": {
// //       "& .MuiSvgIcon-root": {
// //         fontSize: 18,
// //         color: theme.palette.text.secondary,
// //         marginRight: theme.spacing(1.5),
// //       },
// //       "&:active": {
// //         backgroundColor: alpha(
// //           theme.palette.primary.main,
// //           theme.palette.action.selectedOpacity
// //         ),
// //       },
// //     },
// //   },
// // }));

// // export default function CustomizedMenus() {
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const open = Boolean(anchorEl);
// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <div>
// //       <Button
// //         id="demo-customized-button"
// //         aria-controls={open ? "demo-customized-menu" : undefined}
// //         aria-haspopup="true"
// //         aria-expanded={open ? "true" : undefined}
// //         variant="contained"
// //         disableElevation
// //         onClick={handleClick}
// //         endIcon={<KeyboardArrowDownIcon />}
// //       >
// //         Options
// //       </Button>
// //       <StyledMenu
// //         id="demo-customized-menu"
// //         MenuListProps={{
// //           "aria-labelledby": "demo-customized-button",
// //         }}
// //         anchorEl={anchorEl}
// //         open={open}
// //         onClose={handleClose}
// //       >
// //         <MenuItem onClick={handleClose} disableRipple>
// //           <EditIcon />
// //           profile
// //         </MenuItem>
// //       </StyledMenu>
// //     </div>
// //   );
// // }
// localStorage.getItem("token");
// try {
//   const decodedToken = jwtDecode(token);
//   const userId = decodedToken.sub; // Extract the 'sub' claim (user ID)
//   console.log("User ID:", userId);
// } catch (error) {
//   console.error("Error decoding JWT:", error);
// }
