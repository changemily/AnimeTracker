/**
 * We have used BrowserRouter to keep our UI in sync with the URL. BrowserRouter helps with seamless transitions while switching between components. Basically, it will only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page. Though BrowserRouter is not a necessity, it is a must if you want your app to be responsive.
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);