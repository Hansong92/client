import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListstudentComponent from './components/ListstudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatestudentComponent from './components/CreatestudentComponent';
import UpdatestudentComponent from './components/UpdatestudentComponent';
import ViewstudentComponent from './components/ViewstudentComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListstudentComponent}></Route>
                          <Route path = "/students" component = {ListstudentComponent}></Route>
                          <Route path = "/add-student/:id" component = {CreatestudentComponent}></Route>
                          <Route path = "/view-student/:id" component = {ViewstudentComponent}></Route>
                          {/* <Route path = "/update-student/:id" component = {UpdatestudentComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
