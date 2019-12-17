import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/App.css';
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Home from "../components/Home";

class App extends Component {

  state = { 
  };

  render () {
    return (
      <Router>
        <Nav/>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Wrapper>
        <Footer/>
      </Router>
    );
  }
}

export default App;
