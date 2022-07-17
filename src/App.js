import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import MyNavbar from "./Components/MyNavbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
