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
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.app_wrapper}>
        <Header/>
        <Navbar navbarData={props.store.getState().sidebar}/>
        <div className={classes.content}>
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
          {/* dispatch={props.dispatch} dialogsData = {props.state.DialogsPage} */}
          <Route path="/profile" render={() => <Profile store={props.store}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
