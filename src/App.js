import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./App.css";
import TestGame from "./test-game/TestGame.js";

function App() {
  const games = {
    "test game 1": TestGame(),
    "test game 2": <p>i like</p>,
  };

  return (
    <Router>
      <Link to="/">
        <Header />
      </Link>
      <Switch>
        <Route exact path="/">
          <Cards games={games} />
        </Route>
        <Routes games={games} />
      </Switch>
    </Router>
  );
}

function Header() {
  return <h1 className="Header">Icy Puzzles</h1>;
}

Header.propTypes = {
  text: PropTypes.string,
};

function Cards(props) {
  const games = props.games;
  return Object.keys(games).map((gamename) => {
    return <Card key={gamename} name={gamename} />;
  });
}

function Card(props) {
  return (
    <Link to={props.name} className="Card">
      <p className="CardText">{props.name}</p>
    </Link>
  );
}

Card.propTypes = {
  name: PropTypes.string,
};

function Routes(props) {
  const games = props.games;
  return Object.keys(games).map((gamename) => {
    return (
      <Route key={gamename} path={"/" + gamename}>
        {games[gamename]}
      </Route>
    );
  });
}

export default App;
