import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter, ViewManager } from '@ionic/react-router';

import CreateList from './pages/CreateList/CreateList';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ListView from './pages/ListView/ListView';

import './sass/main.scss';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <Menu />
        <IonPage id="main">
          {/* <ViewManager> */}
          {/* <React.Fragment> */}
          {/* <IonSplitPane contentId="main"> */}
          <IonRouterOutlet>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createlist" component={CreateList} />
            <Route path="/list/:listId" component={ListView} />
          </IonRouterOutlet>
          {/* </ViewManager> */}
        </IonPage>
        {/* </React.Fragment> */}
      </IonReactRouter>
      {/* </IonSplitPane> */}
    </IonApp>
  );
}

export default App;
