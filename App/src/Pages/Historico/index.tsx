import { useEffect, } from 'react';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Card, DataTable } from 'react-native-paper';
import api from '../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';
import LottieEmpty from '../../components/lottieEmpty';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/header';

interface Historico {
  id: number,
  users_id: number,
  produto_id: number,
  descricao: string,
  embalagem: string,
  created_at: string | Date | number,
  operacao: string,
  quantidade: number,
  responsavel: string,
}

const { width } = Dimensions.get('window');

interface Usuario {
  id: string | number;
  nome: string;
  email: string;
}

export default function Historico() {
  const [historico, setHistorico] = useState<Historico[]>([]);
  const [user, setUser] = useState<Usuario>({} as Usuario);
  const [column, setColumn] = useState<string>('');
  const [userSet, setUserSet] = useState<Boolean>(false);
  const navigation = useNavigation();

  const getUser = async () => {
    const json = await AsyncStorage.getItem('user');
    if (json) {
      setUser(JSON.parse(json));
      setUserSet(true)
    }
  }

  const getHistorico = async () => {
    try {
      const { data } = await api.getHistorico(1, column);
      setHistorico(data.historico);
    } catch (error) {
      alert(error)
    } finally {

    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getHistorico();
  }, [column]);

  if (!historico) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      }}
      >
        <Spinner visible={true} />
      </View>
    )
  }

  const informaçõesProduto = (id: number) => {
    navigation.navigate('InfoProduto', { id });
  }

  return (
    <>
      <Header title="Historico" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {historico.length ? (
          <>
            <Card>
              <Card.Content>
                <ScrollView horizontal>
                  <DataTable>
                    <DataTable.Header>
                      <TouchableOpacity
                        onPress={() => setColumn('descricao')}
                        style={{
                          position: 'absolute',
                          marginLeft: '7%'
                        }}
                      >
                        <DataTable.Title>
                          Produto
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('created_at')} 
                        style={{
                          position: 'absolute',
                          marginLeft: '22.5%'
                        }}                      
                      >
                        <DataTable.Title>
                          Data
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('created_at')}
                        style={{
                          position: 'absolute',
                          marginLeft: '33%'
                        }}               
                      >
                        <DataTable.Title>
                          Hora
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('operacao')}
                        style={{
                          position: 'absolute',
                          marginLeft: '39.2%'
                        }}
                      >
                        <DataTable.Title>
                          Operação
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('quantidade')}
                        style={{
                          position: 'absolute',
                          marginLeft: '46.6%'
                        }}
                      >
                        <DataTable.Title>
                          Quantidade
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('embalagem')}
                        style={{
                          position: 'absolute',
                          marginLeft: '58.5%'
                        }}
                      >
                        <DataTable.Title>
                          Embalagem
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('responsavel')}
                        style={{
                          position: 'absolute',
                          marginLeft: '74%'
                        }} 
                      >
                        <DataTable.Title>
                          Responsável
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('produto_id')}
                        style={{
                          position: 'absolute',
                          marginLeft: '86.5%'
                        }}                      
                      >
                        <DataTable.Title>
                          Produto ID
                        </DataTable.Title>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setColumn('id')}
                        style={{
                          position: 'absolute',
                          marginLeft: '97%'
                        }}
                      >
                        <DataTable.Title>
                          ID
                        </DataTable.Title>
                      </TouchableOpacity>
                    </DataTable.Header>
                    {historico.map((produto) => (
                      <DataTable.Row onPress={() => { informaçõesProduto(produto.produto_id) }}>
                        <View style={{
                          flex: 1,
                          width: 150,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0',
                          borderLeftWidth: 0.8,
                          borderLeftColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell>
                            {produto.descricao}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1,
                          width: 120,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell >
                            {moment(produto.created_at).format("DD/MM/yyyy")}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1,
                          width: 75,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell>
                            {moment(produto.created_at).format("HH:mm")}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1,
                          width: 75,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell>
                            {produto.operacao}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1,
                          width: 75,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell >
                            {produto.quantidade}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1,
                          width: 150,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell>
                            {produto.embalagem}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1,
                          width: 150,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell>
                            {produto.responsavel}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1,
                          width: 75,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell>
                            {produto.produto_id}
                          </DataTable.Cell>
                        </View>
                        <View style={{
                          flex: 1, width: 75,
                          alignItems: 'center',
                          borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                        >
                          <DataTable.Cell>
                            {produto.id}
                          </DataTable.Cell>
                        </View>
                      </DataTable.Row>
                    ))}
                  </DataTable>
                </ScrollView>
              </Card.Content>
            </Card>
          </>
        ) : (
          <View 
            style={{ 
              flex: 1, alignItems: 'center', justifyContent: 'center', 
              flexDirection: 'column' 
              }}
          >
            <LottieEmpty />
            <Text 
              style={{ 
                fontFamily: 'Inter_900Black', fontSize: 40, 
                marginBottom: 150, color: '#164f64' 
                }}
            >
              Não há histórico
            </Text>
          </View>
        )}
      </View>
    </>
  );
}
