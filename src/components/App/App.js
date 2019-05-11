import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Login } from '../../views/Login/';
import { Main } from '../../views/Main/';
import { Detail } from '../../views/Detail/';
import { Sent } from '../../views/Sent/';
import { SentList } from '../../views/SentList/';

import { Sidebar } from '../SideBar';
import AutoComplete from '../AutoComplete/AutoComplete';
//#0097A7 Main Blue!
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Login}/>
        <Sidebar>
          <Route path='/main/inbox' component={Main}/>
          <Route path='/main/drafts' render={ (props) => <Detail {...props} /> }/>
          <Route path='/main/newMessage' render={ (props) => <Detail {...props} /> }/>
          <Route path='/main/email/:id' render={ (props) => <Sent {...props} />}/>
          <Route path='/main/sents' component={SentList}/>
          <Route path='/test' component={AutoComplete}/>
        </Sidebar>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
