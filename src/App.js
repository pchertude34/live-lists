import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter, ViewManager } from '@ionic/react-router';

import CreateList from './pages/CreateList/CreateList';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ListView from './pages/ListView/ListView';

import PrivateRoute from './hoc/PrivateRoute';

import './sass/main.scss';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonSplitPane contentId="main"> */}
        <Menu />
        <IonPage id="main">
          {/* <ViewManager> */}
          {/* <React.Fragment> */}
          <IonRouterOutlet>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/createlist" component={CreateList} />
            <PrivateRoute path="/list/:listId" component={ListView} />
          </IonRouterOutlet>
          {/* </ViewManager> */}
        </IonPage>
        {/* </React.Fragment> */}
        {/* </IonSplitPane> */}
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
