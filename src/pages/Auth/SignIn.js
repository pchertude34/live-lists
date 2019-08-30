import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = event => {
    // Don't reload the page on submit
    event.preventDefault();
    console.log('email', email);
    console.log('password', password);
  };

  return (
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
  );
};

export default SignIn;
