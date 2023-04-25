/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {Amplify, Auth} from 'aws-amplify';
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
import config from './src/aws-exports';

Amplify.configure(config);

function App() {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

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

const customTheme = {
  ...AmplifyTheme,
  button: {...AmplifyTheme.button, backgroundColor: 'black'},
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default withAuthenticator(App, {signUpConfig, theme: customTheme});
