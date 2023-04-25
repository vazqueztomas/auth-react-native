/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';
import {I18n} from 'aws-amplify';

Amplify.configure(config);

function App() {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

I18n.setLanguage('es');

const dict = {
  es: {
    'Enter your username': 'Ingresa tu usuario',
    'Enter your password': 'Ingresa tu contraseña',
    'Sign Up': 'Registrate',
    'Please Sign In / Sign Up': 'Registrarse / Iniciar sesión',
    'Customized signup': 'Registrate',
    'Full Name': 'Nombre completo',
    'Reset your password': 'Reseteá tu contraseña',
    Hello: 'Hola',
  },
};

I18n.putVocabularies(dict);

const signUpConfig = {
  header: 'Customized signup',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Username',
      key: 'preferred_ username',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
    },
  ],
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default withAuthenticator(App, {
  socialProviders: ['google'],
  signUpConfig,
  includeGreetings: true,
});
