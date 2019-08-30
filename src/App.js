import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';

import CreateList from './pages/CreateList/CreateList';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

import './sass/main.scss';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

function App() {
  return (
    <BrowserRouter>
      <IonApp>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createlist" component={CreateList} />
          </Switch>
        </IonRouterOutlet>
      </IonApp>
    </BrowserRouter>
  );
}

export default App;
