import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonGrid,
  IonPage,
  IonRow,
  IonCol
} from '@ionic/react';

import './SignIn.scss';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = event => {
    // Don't reload the page on submit
    event.preventDefault();
    const credentials = { email, password };

    props.signIn(credentials).then(() => {
      history.push(location.from || '/');
    });
  };

  return (
    <IonPage>
      <IonContent>
        <div className="signin-header">
          <div className="signin-header__logo-container">
            <img
              src="/assets/img/logo-full.png"
              alt="Live Lists"
              className="signin-header__logo"
            />
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <IonGrid>
            <IonRow className="m-b-md">
              <IonCol sizeSm="12" sizeMd="6" offsetMd="3">
                <IonItem lines="full" detailIcon="ios-arrow-forward">
                  <IonLabel color="medium" position="floating">
                    Email
                  </IonLabel>
                  <IonInput
                    autofocus
                    type="email"
                    onIonChange={handleEmailChange}
                    inputMode="email"
                    required
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="m-b-md">
              <IonCol sizeSm="12" sizeMd="6" offsetMd="3">
                <IonItem lines="full" detailIcon="ios-arrow-forward">
                  <IonLabel color="medium" position="floating">
                    Password
                  </IonLabel>
                  <IonInput
                    type="password"
                    onIonChange={handlePasswordChange}
                    inputMode="password"
                    max={25}
                    required
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="m-b-md">
              <IonCol sizeSm="12" sizeMd="6" offsetMd="3">
                <button
                  className="signin-button signin-button__gradient"
                  type="submit"
                >
                  Login
                </button>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
        <IonItem button lines="none" detail={false} className="text-center">
          <div className="text-center width-full">
            <p className="color-gray-light">
              Don't have an account? <b>Sign Up</b>
            </p>
          </div>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
