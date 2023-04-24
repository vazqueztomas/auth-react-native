import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onConfirmationPress = () => {
    navigation.navigate('Home');
  };

  const onResendCodePress = () => {
    console.warn('Back');
  };
  const onGoBackPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirmá tu email</Text>

        <CustomInput
          placeholder={'Ingresa tu código'}
          value={code}
          setValue={setCode}
        />
        <CustomButton
          onPress={onConfirmationPress}
          text="Confirmar"
          type={'PRIMARY'}
        />

        <CustomButton
          onPress={onResendCodePress}
          text="Reenviar código"
          type={'SECONDARY'}
        />
        <CustomButton
          onPress={onGoBackPress}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
  },
});

export default ConfirmEmailScreen;
