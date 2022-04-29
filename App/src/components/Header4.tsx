import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/core";

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const { height } = Dimensions.get('window');

export default function Header({title, showCancel = true}: HeaderProps) {
  const navigation = useNavigation();  

  function voltarParaHome() {
    navigation.navigate('Home');
  }

  function voltarParaProduto() {
    navigation.navigate('InfoProduto')
  }

  return(
    <View style={styles.container}>
      <BorderlessButton onPress={voltarParaProduto} style={{marginTop: '3%'}}>
        <Feather name="arrow-left" size={24} color="white" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      { showCancel ? (
      <BorderlessButton onPress={voltarParaHome} style={{marginTop: '3%'}}>
        <Feather name="x" size={24} color="red" />
      </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#164e63',    
    borderColor: '#dde3f0',
    paddingTop: 44,
    height: '15%',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  title: {
    marginTop: '3%',
    color: '#ecfeff',
    fontSize: 18,
    fontFamily: 'Inter_900Black'
    }
})