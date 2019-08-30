import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <IonApp>
        <IonRouterOutlet>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </IonRouterOutlet>
      </IonApp>
    </BrowserRouter>
  );
}

export default App;
