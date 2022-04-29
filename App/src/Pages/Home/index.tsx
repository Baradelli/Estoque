import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { Produtos } from '../../services/types';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
import Header from '../../components/header';
import LottieEmpty from '../../components/lottieEmpty';
import BarcodeScan from './dialog'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [produtos, setProduto] = useState<Produtos[]>([]);  
  const [filtro, setFiltro] = useState('');
  const [load, setLoad] = useState<Boolean>(true);  
  const [visible, setVisible] = useState<Boolean>(false);
  const [codigoDeBarras, setCodigoDeBarras] = useState()  
  const navigation = useNavigation();

  const buscarEstoque = async () => {
    try {
      const json = await AsyncStorage.getItem('user');

      if (!json) {
        return
      }

      const user = JSON.parse(json);

      const { data } = await api.getPesquisa(user.id, filtro)
      
      setProduto(data.produtos)
      setLoad(false)
    } catch (error) {
      console.warn(error)
    }
  }

  const informaçõesProduto = (id: number) => {
    navigation.navigate('InfoProduto', { id });
    setFiltro('')
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    useEffect(() => {
        buscarEstoque();
    }, [refreshing, filtro]);

  if (load) {
    return (
      <View style={styles.containerspinner}>
        <Spinner visible={true} />
      </View>
    )
  }

  return (
    <>
      <Header 
        title="Selecione o mapa" 
        setFiltro={setFiltro} 
        setCodigoDeBarras={setCodigoDeBarras}
        scannedTrue={setVisible}
      />
    {produtos.length ? (
      <>    
        <SafeAreaView style={styles.container}>
          <BarcodeScan 
            visible={visible}
            setVisible={setVisible}
            setCodigoDeBarras={setFiltro}
            visibleScan={setVisible}

          />
          <ScrollView
            style={styles.container}
            contentContainerStyle={{ padding: 24 }}
            refreshControl={
              <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
              />}
          >
          {produtos.map(produtos => (
            <TouchableOpacity 
              key={produtos.descricao} 
              onPress={() => { informaçõesProduto(produtos.id) }} 
              style={styles.subContainer}
            >
              <View style={styles.digitado}>
                  <Text style={styles.tText}>{produtos.descricao}</Text>
                  <Text style={styles.description}>{produtos.embalagem}</Text>
                  <Text style={styles.description}>Estoque: {produtos.quantidade}</Text>
              </View>
              <View>
                  {produtos.images.map(image => (
                      <Image
                          key={image.id}
                          style={styles.produtoImagem}
                          source={{ uri: image.url }}
                      />
                  ))}
              </View>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </SafeAreaView>
      </>
    ) : (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <LottieEmpty />          
        <Text 
          style={{ 
            fontFamily: 'Inter_900Black', fontSize: 40,
            marginBottom: 150, color: '#164f64' }}
        >
          Produto não encontrado
        </Text>
      </View>
    ) }
    </>
  )
}

export default Home;
