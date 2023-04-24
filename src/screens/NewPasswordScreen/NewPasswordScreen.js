import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const NewPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const onResetPasswordPress = () => {
    console.warn('Recuperar contraseña');
  };

  const onSignInPress = () => {
    console.warn('on sign in');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reseteá tu contraseña</Text>

        <CustomInput
          placeholder={'Ingresa el código que recibiste'}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder={'Nueva contraseña'}
          value={username}
          setValue={setUsername}
        />

        <CustomButton
          onPress={onResetPasswordPress}
          text="Cambiar contraseña"
          type={'PRIMARY'}
        />

        <CustomButton
          onPress={onSignInPress}
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

export default NewPasswordScreen;
