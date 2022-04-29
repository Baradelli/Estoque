import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import api from '../services/api';

const BarraPesquisa = ({ setProduto, setFiltro, setValidacao, filtroCodigoDeBarras }: string | number | any) => {  
  const [users_id, setUsers_id] = useState(1);
  const [filter, setFilter] = useState('');

  setFilter(filtroCodigoDeBarras)

  const onChangeSearch = query => {
    setFilter(query)    
    };

  const endEditing = () => {
    setFiltro(filter)
  }

  const { width } = Dimensions.get('window'); 
  const { height } = Dimensions.get('window');

  return (
    <Searchbar
      icon="arrow-left"
      onIconPress={() => {setValidacao(false)}}      
      placeholder="Pesquisar produto"
      onChangeText={onChangeSearch}
      style={{width: width * 0.80, marginRight: width * 0.01, marginTop: height * 0.01, alignItems: 'center'}}
      onEndEditing={endEditing}
    />
  );
};

export default BarraPesquisa;
