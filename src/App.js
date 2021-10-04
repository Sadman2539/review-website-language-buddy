import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* header section  */}
          <Header></Header>
          {/* body  section  */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/courses">
              <Courses></Courses>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          {/* footer section  */}
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
