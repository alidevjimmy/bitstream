import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './Pages/List'
import Stream from './Pages/Stream'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    let { search } = this.state
    return (<Router>
      <Switch>
        <Route path="//">
          <input type="text" placeholder="search..." onChange={this.handleChange} />
          <Link to={`list/${search}`}>search</Link>
        </Route>
        <Route exact path="/list/:search" component={List} />
        <Route exact path="/stream/:magnet" component={Stream} />
      </Switch>
    </Router>
    )
  }
}

export default App

