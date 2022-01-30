import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Appointments from './Components/Appointments/Appointments';
import Doctors from './Components/Doctors/Doctors';
import Login from './Components/Login/Login/Login';
import Register from "./Components/Login/Register/Register";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Schedule from './Components/Schedule/Schedule';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointments">
              <Appointments />
            </PrivateRoute>
            <PrivateRoute path="/schedule">
              <Schedule />
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <h1>this is page is not available</h1>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
