import './App.css';
import Navbar from './comps/navbar';
import Footer from './comps/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Business from './business';

function App() {
  return (
    <Router>
       <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route> 
          <Route exact path="/about">
            <About />  
          </Route> 
          <Route exact path="/business">
            <Business />  
          </Route> 
        </Switch>
       <Footer />
    </Router>
   
  );
}


export default App;