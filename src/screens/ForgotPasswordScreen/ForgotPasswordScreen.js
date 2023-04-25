import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const onGoBack = () => {
    navigation.navigate('SignIn');
  };

  const onForgotPasswordPress = () => {
    navigation.navigate('NewPassword');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reseteá tu contraseña</Text>

        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />

        <CustomButton
          onPress={onForgotPasswordPress}
          text="Recuperar contraseña"
          type={'PRIMARY'}
        />

        <CustomButton
          onPress={onGoBack}
          text="Volver atrás"
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

export default ForgotPasswordScreen;
