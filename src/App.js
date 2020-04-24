import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./components/Category"
import Products from "./components/Products";
import PrivateRoute from "./components/Privateroute";
import Login from "./components/Login";
import LogOut from "./components/Logout";
function Home() {
  return <h2>Home</h2>;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: false,
    };

    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    this.setState({ log: true });
    console.log(this.state.log);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <PrivateRoute
            path="/products"
            connected={true}
            component={Products}
          />
          <Route exact path="/login" component={Login} />
          <Route path="/login/admin" component={LogOut} />
        </Switch>
      </div>
    );
  }
}
export default App;
