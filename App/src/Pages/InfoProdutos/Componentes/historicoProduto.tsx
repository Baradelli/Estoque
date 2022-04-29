import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Card, DataTable } from 'react-native-paper';
import { Produto } from '../Interface/interfaces'
import moment from 'moment';
import api from '../../../services/api';
import LottieEmpty from '../../../components/lottieEmpty';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const { width } = Dimensions.get('window');

const HistoricoProduto = (produtoID) => {
  const [historico, setHistorico] = useState<Historico[]>([]);
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [column, setColumn] = useState<string>('');
  const [user, setUser] = useState<Usuario>({} as Usuario);
  const [userSet, setUserSet] = useState<Boolean>(false);

  const getUser = async () => {
    const json = await AsyncStorage.getItem('user');
    if (json) {
      setUser(JSON.parse(json));
      setUserSet(true)
    }
  }

  const pegarProdutoId = async () => {
    const { data } = await api.getHistoricoId(user.id, produtoID.produtoID);
    setHistorico(data.historico);
    return;
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    pegarProdutoId()
  })

  return (
    <>
      {historico.length ? (
        <ScrollView>
          <Card>
            <Card.Content>
              <ScrollView horizontal>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title
                      style={{
                        position: 'absolute',
                        marginLeft: '12%'
                      }}
                    >
                      Data
                    </DataTable.Title>
                    <TouchableOpacity
                      onPress={() => setColumn('created_at')}
                      style={{
                        position: 'absolute',
                        marginLeft: '32.5%'
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
                        marginLeft: '45%'
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
                        marginLeft: '59%'
                      }}
                    >
                      <DataTable.Title>
                        Quantidade
                      </DataTable.Title>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setColumn('responsavel')}
                      style={{
                        position: 'absolute',
                        marginLeft: '81%'
                      }}
                    >
                      <DataTable.Title>
                        Responsável
                      </DataTable.Title>
                    </TouchableOpacity>
                  </DataTable.Header>
                  {historico.map((produto) => (
                    <DataTable.Row>
                      <View
                        style={{
                          flex: 1, width: 120,
                          alignItems: 'center', borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0', borderLeftWidth: 0.8,
                          borderLeftColor: '#C0C0C0'
                        }}
                      >
                        <DataTable.Cell>
                          {moment(produto.created_at).format("DD/MM/yyyy")}
                        </DataTable.Cell>
                      </View>
                      <View
                        style={{
                          flex: 1, width: 75,
                          alignItems: 'center', borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                      >
                        <DataTable.Cell>
                          {moment(produto.created_at).format("HH:mm")}
                        </DataTable.Cell>
                      </View>
                      <View
                        style={{
                          flex: 1, width: 75,
                          alignItems: 'center', borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                      >
                        <DataTable.Cell>
                          {produto.operacao}
                        </DataTable.Cell>
                      </View>
                      <View
                        style={{
                          flex: 1, width: 75,
                          alignItems: 'center', borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                      >
                        <DataTable.Cell>
                          {produto.quantidade}
                        </DataTable.Cell>
                      </View>
                      <View
                        style={{
                          flex: 1, width: 150,
                          alignItems: 'center', borderRightWidth: 0.8,
                          borderRightColor: '#C0C0C0'
                        }}
                      >
                        <DataTable.Cell>
                          {produto.responsavel}
                        </DataTable.Cell>
                      </View>
                    </DataTable.Row>
                  ))}
                </DataTable>
              </ScrollView>
            </Card.Content>
          </Card>
        </ScrollView>
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
    </>
  )
}

export default HistoricoProduto;
