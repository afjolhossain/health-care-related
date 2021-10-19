import './App.css';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/booking/Booking';
import Header from './pages/shared/heder/Header';
import Login from './pages/Login/Login/Login';
import AuthPovider from './contexts/AuthPovider';
import Register from './pages/Login/Login/Register';
import Footer from './pages/shared/footer/Footer';
import AboutUS from './pages/aboutUs/AboutUS';
import ContactUs from './pages/contact/ContactUs';
import PrivateRoute from './pages/Login/privateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthPovider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/Booking/:serviceId">
           <Booking></Booking>
          </PrivateRoute>
          <Route path="/AboutUs">
            <AboutUS></AboutUS>
          </Route>
          <Route path="/ContactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthPovider>
     
    </div>
  );
}

export default App;
