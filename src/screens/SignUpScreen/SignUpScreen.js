import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSingInButtons from '../../components/SocialSignInButtons/SocialSingInButtons';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPress = () => {
    console.warn('Register');
  };

  const onTermsOfUsePress = () => {
    console.warn('Terms of use');
  };
  const onPolityPrivacyPress = () => {
    console.warn('onPolityPrivacy');
  };

  const onSignInPress = () => {
    console.warn('on sign in');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder={'Email'} value={email} setValue={setEmail} />
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder={'Repeat password'}
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={onRegisterPress}
          text="Register"
          type={'PRIMARY'}
        />

        <Text style={styles.text}>
          Al registrarte confirmas que aceptas nuestros{' '}
          <Text style={styles.link} onPress={onTermsOfUsePress}>
            Términos de Uso
          </Text>{' '}
          y{' '}
          <Text style={styles.link} onPress={onPolityPrivacyPress}>
            Política de Privacidad
          </Text>
        </Text>

        <SocialSingInButtons />

        <CustomButton
          onPress={onSignInPress}
          text="Ya tenés cuenta? Ingresá"
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    maxWidth: 300,
    width: '70%',
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
