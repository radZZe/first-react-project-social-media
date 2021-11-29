import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import classes from "./App.module.css"
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';



const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className={classes.app_wrapper}>
        <Header/>
        <Navbar navbarData={props.state.sidebar}/>
        <div className={classes.content}>
          <Route path="/dialogs" render={() => <Dialogs
              dispatch={props.dispatch}
              dialogsData = {props.state.DialogsPage}/>}/>
          <Route path="/profile" render={() => <Profile
              dispatch={props.dispatch}
              posts={props.state.ProfilePage}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
