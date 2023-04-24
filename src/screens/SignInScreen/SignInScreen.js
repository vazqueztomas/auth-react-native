import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSingInButtons from '../../components/SocialSignInButtons/SocialSingInButtons';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPress = () => {
    console.warn('on sing in');
  };
  const onForgotPasswordPress = () => {
    console.warn('onForgotPasswordPress');
  };

  const onSignUpPress = () => {
    console.warn('on sign up');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPress} text="Sign In" type={'PRIMARY'} />

        <CustomButton
          onPress={onForgotPasswordPress}
          text="Forgot password?"
          type="TERTIARY"
        />
        <SocialSingInButtons />
        <CustomButton
          onPress={onSignUpPress}
          text="No tenes cuenta? Creá una acá"
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
});

export default SignInScreen;
