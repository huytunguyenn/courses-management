import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import HomePage from "../Home/HomePage";
import AboutPage from "../About/AboutPage";
import CoursesPage from "../Courses/CoursesPage";
import PageNotFound from "../../PageNotFound";
import Footer from "./Footer";


export default function RouterURL(){
    return(
        <div>
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