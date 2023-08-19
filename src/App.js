import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./firebase";
import "./App.scss";
import tech from "./tech.png";

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    branch: "",
    phonenumber: "",
  });
