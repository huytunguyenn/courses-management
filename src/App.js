import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/About/AboutPage";
import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./Components/Courses/CoursesPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
