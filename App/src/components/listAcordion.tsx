import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';

const ListAcordion = () => {

  const [filtro, setFiltro] = useState('nome');
  const [selectedValue, setSelectedValue] = useState("NOME");
  
  return (

      <View style={styles.filtro}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150, marginBottom: 20, }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue)
          setFiltro(itemValue)
          }
        }      
      >
        <Picker.Item label="Nome" value="nome" />
        <Picker.Item label="Codigo" value="codigo" />
        <Picker.Item label="Embalagem" value="embalagem" />
        <Picker.Item label="Codigo de barra" value="codigo de barra" />
      </Picker>

      {filtro === 'codigo' && (
              <TextInput style={styles.input} placeholder="Filtrar por codigo" />
          )}
          {filtro === 'nome' && (
              <TextInput style={styles.input} placeholder="Filtrar por nome" />
          )}
          {filtro === 'embalagem' && (
              <TextInput style={styles.input} placeholder="Filtrar por embalagem" />
          )}
          {filtro === 'codigo de barra' && (
              <TextInput style={styles.input} placeholder="Filtrar por codigo de barras" />
          )}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    alignItems: "center"
  },

  filtro: {
      borderBottomWidth: 0.8,
      borderBottomColor: '#D3E2E6',
      paddingBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
  },

  input: {
      backgroundColor: '#fff',
      borderWidth: 1.4,
      borderColor: '#d3e2e6',
      borderRadius: 20,
      height: 56,
      paddingVertical: 18,
      paddingHorizontal: 24,
      marginBottom: 16,
      textAlignVertical: 'top',
      width: 225,
      marginRight: 10,
  },

});

export default ListAcordion;
