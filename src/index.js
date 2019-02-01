//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

//local import
import configureStore, { history } from './Store/configureStore';
import '../src/index.css';
import Films from './Components/Templates/Films';
import People from './Components/Templates/People';
import Planets from './Components/Templates/Planets';
import Species from './Components/Templates/Species';
import Starships from './Components/Templates/Starships';
import Vehicles from './Components/Templates/Vehicles';

export let store = configureStore()

const ApiApp = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/films' render={Films}></Route>
          <Route path='/people' render={People}></Route>
          <Route path='/planets' render={Planets}></Route>
          <Route path='/species' render={Species}></Route>
          <Route path='/starships' render={Starships}></Route>
          <Route path='/vehicles' render={Vehicles}></Route>
        </Switch>
      </ConnectedRouter>    
    </Provider>
  )
}
ReactDOM.render(
  <ApiApp/>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
