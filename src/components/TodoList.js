import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { tsPropertySignature } from '@babel/types';

const TodoList = (prop) => (
  <View style={styles.container}>
    <Text style={styles.texto}>{prop.titulo}</Text>
    <Text style={styles.texto}>{prop.autor}</Text>
    <Text style={styles.texto}> {prop.texto}</Text>
  </View>
);

export default TodoList;

const styles=StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
  },
  texto:{
    color:"black", 
    fontSize:18,
    fontWeight:"bold", 
  }

})
