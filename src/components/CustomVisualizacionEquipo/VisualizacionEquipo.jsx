import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const VisualizacionEquipo = ({equipo, resultado}) => {
  return (
    <View style={styles.container}>
      <Text>{equipo}</Text>
      <Text>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VisualizacionEquipo;
