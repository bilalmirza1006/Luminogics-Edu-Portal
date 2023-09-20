import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessToast = () => {
  toast.success("Success!", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

function DomyScreen() {
  return (
    <div>
      <button onClick={showSuccessToast}>Show Success Toast</button>
      <ToastContainer />
    </div>
  );
}

export default DomyScreen;
