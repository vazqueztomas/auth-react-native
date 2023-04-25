import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const UltimosPartidosScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.table}
        data={[
          {nombre: 'River', resultado: '2-0'},
          {nombre: 'Casla', resultado: '2-0'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.nombre} : {item.resultado}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  table: {
    marginVertical: 6,
  },
  item: {
    padding: 4,
  },
});

export default UltimosPartidosScreen;
