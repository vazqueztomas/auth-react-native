import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import VisualizacionEquipo from '../../components/CustomVisualizacionEquipo/VisualizacionEquipo';

const NuevoPartidoScreen = () => {
  const navigation = useNavigation();
  const [equipo1, setEquipo1] = useState('');
  const [equipo2, setEquipo2] = useState('');

  const [resultadoEquipo1, setResultadoEquipo1] = useState(0);
  const [resultadoEquipo2, setResultadoEquipo2] = useState(0);

  const ingresarPartidoPress = () => {
    // probando
  };

  const GoBackButton = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Cargar nuevo partido</Text>
      <CustomInput
        value={equipo1}
        setValue={setEquipo1}
        placeholder={'Ingrese su equipo'}
      />

      <CustomInput
        value={equipo2}
        setValue={setEquipo2}
        placeholder={'Ingrese su equipo'}
      />
      <View style={styles.containerNumberInputs}>
        <View style={styles.numberInputs}>
          <TextInput
            value={resultadoEquipo1}
            onChangeText={setResultadoEquipo1}
            placeholder="R1"
          />
        </View>
        <View style={styles.numberInputs}>
          <TextInput
            value={resultadoEquipo1}
            onChangeText={setResultadoEquipo2}
            placeholder="R1"
          />
        </View>
      </View>
      <CustomButton
        onPress={ingresarPartidoPress}
        text="Ingresar"
        type="PRIMARY"
      />
      <CustomButton
        onPress={GoBackButton}
        text="Volver atrás"
        bgColor={'#FAE9EA'}
        fgColor={'#dd4d44'}
      />
      <View style={[styles.containerNumberInputs]}>
        <VisualizacionEquipo equipo={equipo1} resultado={resultadoEquipo1} />
        <VisualizacionEquipo equipo={equipo2} resultado={resultadoEquipo2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerNumberInputs: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 10,
  },
  numberInputs: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NuevoPartidoScreen;
