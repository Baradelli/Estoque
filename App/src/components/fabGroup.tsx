import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from "@react-navigation/core";

const FabGroup = () => {
  const navigation = useNavigation();  
  
    function AdicionarProduto() {
      navigation.navigate('AddProduto');
    }

  return (
    <FAB
      style={styles.fab}
      visible
      color="#FFF"
      icon="plus"
      onPress={AdicionarProduto}
      theme={{ colors: { background: "red" } }}
    />        
  );
};

export default FabGroup;

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#164e63',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: '#fff',
  },
})