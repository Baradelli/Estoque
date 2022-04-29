import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import BarraPesquisa from './searchBar';

interface HeaderProps {
  title: string;
  setFiltro: (x: string) => void;
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function Header({ title, setFiltro, setCodigoDeBarras, scannedTrue }: HeaderProps | string | number | any) {
  const [validacao, setValidacao] = useState(false);
  const [produto, setProduto] = useState()

  const navigation = useNavigation();

  function irParaperfil() {
    navigation.navigate('Perfil');
  }

  const validar = () => {
    setValidacao(true)
  }

  const clickEscanear = () => {
    scannedTrue(true)
  }

  return (
    <View style={styles.container}>
      <View>
        <BorderlessButton onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={30} color='white' alignItems='center' justifyContent='center' />
        </BorderlessButton>
      </View>
      <View>
        {validacao ?
          (
            <BarraPesquisa
              setProduto={setProduto}
              setFiltro={setFiltro}
              setValidacao={setValidacao}
              filtroCodigoDeBarras={setCodigoDeBarras}
            />
          ) : (
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity onPress={clickEscanear}>
                <MaterialCommunityIcons name="barcode-scan" size={24} color="white" />
              </TouchableOpacity>
              <FontAwesome5 name="search" size={24} color="white" style={styles.search} onPress={validar} />
            </View>
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#164e63',
    borderColor: '#dde3f0',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingTop: 40,
    height: '12%'
  },
  title: {
    color: '#8fa7be',
    fontSize: 16,
  },

  search: {
    paddingLeft: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
})
