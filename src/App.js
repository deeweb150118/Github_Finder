import React, { Fragment } from "react";
import Navbar from "./Component/layout/Navbar";
import Home from "./Component/Pages/Home";
import Alert from "./Component/layout/Alert";
import About from "./Component/Pages/About";
import User from "./Component/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./Component/Pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                   <Home/>
                  </Fragment>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/user/:username" element={<User />} />
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
