import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const GoBack = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text onPress={GoBack}>Go back</Text>
    </View>
  );
};

export default HomeScreen;
