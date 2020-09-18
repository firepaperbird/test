import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import PostContainer from "./Post/index";
import NewPost from "./CreatePost/index";
import SearchBox from "./Search/index";
import Login from "./login/index"
import SearchResult from "./Search/SearchResult";
import { Navbar, Nav,} from "react-bootstrap";
import { Provider } from "react-redux";
import store from '../util/store'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
    };
    this.handleSearchResult = this.handleSearchResult.bind(this);
  }

  handleSearchResult = (list) => {
    console.log(list);
    this.setState({
      searchResult: list,
    });

    SearchResult.updateSearch;
  };
  render() {
    console.log(this.state.searchResult);
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">Zigvy</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/new">New</Nav.Link>
              </Nav>
              <SearchBox
                handleSearchResult={this.handleSearchResult}
              ></SearchBox>
              <nav className="mr-sm-2">
                <Nav.Link href="/user">login</Nav.Link>
              </nav>
            </Navbar>

            <hr />

            {/*
                  A <Switch> looks through all its children <Route>
                  elements and renders the first one whose path
                  matches the current URL. Use a <Switch> any time
                  you have multiple routes, but you want only one
                  of them to render at a time
                */}
            {this.state.searchResult != null && (
              <SearchResult blogPosts={this.state.searchResult} />
            )}
            {this.state.searchResult == null && (
              <Switch>
                <Route exact path="/"  component={PostContainer}>
                </Route>
                <Route path="/new" component={NewPost}>
                </Route>
                <Route path="/user" component={User}>
                </Route>
                <Route path="/search">
                </Route>
              </Switch>
            )}
          </div>
        </Router>
      </Provider>
    );
  }
}
function User(){
  return <Login/>;
}

export default Home;
