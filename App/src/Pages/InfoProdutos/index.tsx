import React, { useEffect, useState } from 'react';
import { Tabs, TabScreen } from 'react-native-paper-tabs';
import DadosDoProduto from './Componentes/dadosProduto';
import { Produto } from '../InfoProdutos/Interface/interfaces'
import HistoricoProduto from '../InfoProdutos/Componentes/historicoProduto';
import { useFocusEffect, useRoute } from '@react-navigation/core';
import api from '../../services/api';
import Header2 from '../../components/header2';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProdutoRouteParams {
  id: number
}

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

interface Image {
  id: number;
  url: string;
}

function InfoProduto() {
  const route = useRoute();
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [user, setUser] = useState<Usuario>({} as Usuario);
  const [images, setImages] = useState<Image[]>([]);  

  const params = route.params as ProdutoRouteParams;

  const pegarProduto = async () => {    
    try {
      const params = route.params as ProdutoRouteParams

      const json = await AsyncStorage.getItem('user');

      if (!json) {
        return
      }

      const user = JSON.parse(json);  

      setUser(user)

      const { data } = await api.getInfoProduto(user.id, params.id)
      setProduto(data)
      setImages(data.images)      
    } catch (error) {
      console.warn(error)
    }   
  }

  useEffect(() => {
    pegarProduto()
  }, [ , params])  

  return (
    <>
      <Header2 title={produto.descricao} />
      <Tabs
        uppercase={false}
        style={{ backgroundColor: '#fff' }}
      >                    
        <TabScreen label="Dados do produto" icon="clipboard-text">
          <DadosDoProduto 
            produto={produto}   
            images={images}
            usuario={user}            
          />
        </TabScreen>
        <TabScreen label="Lançamentos estoque" icon="clipboard-list">
          <HistoricoProduto produtoID={produto.id} />
        </TabScreen> 
      </Tabs>
    </>
  )
}

export default InfoProduto;
