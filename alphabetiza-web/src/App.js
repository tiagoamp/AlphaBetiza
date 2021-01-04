import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from "./pages/Admin";
import Initial from "./pages/Initial";
import Child from "./pages/Child";


function App() {
  return (
    <div className="App">

      <Header />

      <Router> 
        <div className="main">          
          <Switch>
            <Route exact path="/">
              <Initial />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/kids">
              <Child />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
