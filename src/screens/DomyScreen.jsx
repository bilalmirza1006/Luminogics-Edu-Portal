// // import React from "react";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// import { QueueSharp, Sort } from "@mui/icons-material";

// // const showSuccessToast = () => {
// //   toast.success("Success!", {
// //     position: toast.POSITION.TOP_RIGHT,
// //     autoClose: 3000,
// //     hideProgressBar: false,
// //     closeOnClick: true,
// //     pauseOnHover: true,
// //     draggable: true,
// //   });
// // };

// // function DomyScreen() {
// //   return (
// //     <div>
// //       <button onClick={showSuccessToast}>Show Success Toast</button>
// //       <ToastContainer />
// //     </div>
// //   );
// // }

// // export default DomyScreen;

// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length - 1];
//   }
//   push(value) {
//     this.array.push(value);
//     return this;
//   }
//   pop() {
//     this.array.pop();
//     return this;
//   }
// }

// const myStack = new Stack();
// myStack.peek();
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("discord");
// myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();

// //third Discord
// //second Udemy
// //first google

// // Queue
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     const holdingPointer = this.first;
//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty;
// }

// const myQueue = new Queue();
// myQueue.peek();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();

// // bubble Sort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
// }

// bubbleSort(numbers);
// consol;

// // selection

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     let min = i;
//     let temp = array[i];
//     for (let j = i + 1; j < length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }

// selectionSort(numbers);
// console.log(numbers);

// // insertion

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     if (array[i] < array[0]) {
//       array.unshift(array.splice(i, 1)[0]);
//     } else {
//       if (array[i] < array[i - 1]) {
//         for (var j = 1; j < i; j++) {
//           if (array[i] >= array[j - 1] && array[i] < array[j]) {
//             array.splice(j, 0, array.splice(i, 1)[0]);
//           }
//         }
//       }
//     }
//   }
// }

// insertionSort(numbers);
// console.l;
