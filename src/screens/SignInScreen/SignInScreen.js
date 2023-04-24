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
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPress = () => {
    console.warn('on sing in');
    //validate user

    navigation.navigate('Home');
  };
  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
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
        <CustomButton
          onPress={onSignInPress}
          text="Ingresar"
          type={'PRIMARY'}
        />

        <CustomButton
          onPress={onForgotPasswordPress}
          text="Olvidaste tu contraseña?"
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
