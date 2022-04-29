import React, { useContext, useEffect } from 'react';
import Logo from '../../Images/Logo.png';
import { View, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreLoad = () => {
  const navigation = useNavigation();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      navigation.navigate('Estoque')
    } else {
      navigation.navigate('Login')
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
    </View>
  );
}

export default PreLoad;
