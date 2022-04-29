import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

interface Usuario {
  id: string | number;
  nome: string;
  email: string;
}

function CustomDrawerContent(props: any) {
  const [user, setUser] = useState<Usuario>({} as Usuario);
  const [ativado, setAtivado] = useState<Boolean>(false)
  const navigation = useNavigation();

  const getUser = async () => {
    const json =  await AsyncStorage.getItem('user');
    if (json) {
      setUser(JSON.parse(json));
      setAtivado(true)      
    }
  } 

  useEffect(() => {
    getUser();
  }, [])
  
  const sair = async () => {
      try {
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('user');

          navigation.navigate('Login');
      } catch (error) {
          alert('Algo deu errado ao sair!');
      }
  }

  return (
    <>
      <View style={styles.containerAvatar}>
        <View style={styles.avatar}>
          <Avatar.Text size={50} label={ativado ? (user?.nome.toUpperCase().substr(0,1)) : ('')} backgroundColor='#164e63' />
        </View>
        <View style={styles.text}>
            <Text style={styles.escrita}>{user.nome}</Text>
            <Text style={styles.escrita}>{user.email}</Text>
        </View>
      </View>
      <DrawerItemList {...props}/>
      <View style={styles.subcontainer}>
        <RectButton style={styles.button} onPress={sair}>
          <Text style={styles.nextButtonText}>Sair</Text>
        </RectButton>
      </View>
    </>
  );
}

export default CustomDrawerContent;
