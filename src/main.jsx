import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ListedBooks from "./Pages/ListedBooks.jsx";
import PagesToRead from "./Pages/PagesToRead.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import books from "../public/books.json"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home books = {books}></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
