import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage } from '@ionic/react';

import CreateList from './pages/CreateList/CreateList';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

import './sass/main.scss';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <IonApp>
      <BrowserRouter>
        {/* <IonSplitPane contentId="main"> */}
        <Menu />
        <IonPage id="main">
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/createlist" component={CreateList} />
            </Switch>
          </IonRouterOutlet>
        </IonPage>
        {/* </IonSplitPane> */}
      </BrowserRouter>
    </IonApp>
  );
}

export default App;
