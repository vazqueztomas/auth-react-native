import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/logo.png';
import UltimosPartidosScreen from '../UltimosPartidosScreen/UltimosPartidosScreen';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {height} = useWindowDimensions();
  const navigate = useNavigation();

  const addNuevoPartidoPress = () => {
    navigate.navigate('NuevoPartido');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
      </View>
      <View style={[styles.container, styles.partidosContainer]}>
        <Text>Tus últimos partidos:</Text>
        <UltimosPartidosScreen />
        <CustomButton
          onPress={addNuevoPartidoPress}
          text="Añadir nuevo partido"
          type="PRIMARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    maxHeight: 200,
  },
  partidosContainer: {
    marginVertical: 20,
    padding: 20,
  },
});

export default HomeScreen;
