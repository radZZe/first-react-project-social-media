import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import classes from "./App.module.css"
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Users from "./Components/Users/Users";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <NavbarContainer/>
                {/* navbarData={props.store.getState().sidebar} */}
                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    {/* store={props.store} */}
                    <Route path="/profile" render={() => <Profile/>}/>
                    {/* store={props.store} */}
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
