import React from "react";
import './styles/App.scss';
import Contacts from './components/contacts/Contacts';
import Navbar  from './components/elements/Navbar';
import {provider} from "react-redux";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";


function App() {
  return (
    <Provider store={store}> 
      <Router>
      <div className="App">
       <Navbar></Navbar>
       <div className="container">
         <div className="py-3">
           <Switch>
           <Router exact path="/" component={Contacts} />
           <Router exact path="/contacts/add" component={AddContact} />
           </Switch>
         </div>
       </div>
    </div>
      </Router>
    </Provider>
  );
}

export default App;
