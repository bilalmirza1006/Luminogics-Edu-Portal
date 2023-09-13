// import React, { useState } from "react";
// import axios from "axios";
// import Alert from "@mui/material/Alert"; // Import the Alert component from Material-UI

// function DomyScreen() {
//   const [name, setName] = useState("");
//   const [list, setList] = useState([]);
//   const [showAlert, setShowAlert] = useState(false); // Add a state variable to control the alert visibility

//   const handleApi = () => {
//     if (name.trim() === "" || list.length === 0) {
//       setShowAlert(true); // Set showAlert to true to display the alert
//     } else {
//       setName("");
//       setList([]);
//       axios
//         .post("http://localhost:6464/api/add-weeks", {
//           name: name,
//           item: list,
//         })
//         .then((response) => {
//           if (!response.data.success) {
//             throw new Error("complete all the fields");
//           }
//           console.log(response);
//           alert("submitted");
//         })
//         .catch((error) => {
//           alert(error.message);
//           console.log("CATCH: ", error);
//         });
//     }
//   };

//   return (
//     <div>
//       {/* Conditionally render the alert */}
//       {showAlert && (
//         <Alert variant="outlined" severity="error">
//           This is an error alert — check it out!
//         </Alert>
//       )}

//       {/* Rest of your component JSX */}
//     </div>
//   );
// }

// export default DomyScreen;
