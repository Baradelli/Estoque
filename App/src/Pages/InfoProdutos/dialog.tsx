import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Image } from 'react-native'
import { Button, Dialog, Portal } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import xhr from '../../services/xhr';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const AlterarQuantidade = ({
  visible, setVisible, uri, userId,
  produtoId, produtoQuantidade, produtoDescricao,
  produtoEmbalagem, userName
}: string | number | any) => {
  const [quantidade, setQuantidade] = useState<number>();

  const clickButtonAtualizar = async () => {
    try {     
      const quantidadeAlterada = produtoQuantidade + Number(quantidade);

      if(quantidadeAlterada >= 0 ){
        const operacao = quantidadeAlterada >= produtoQuantidade ? '+' : '-'

        const quanidadeSimbolo = String(operacao) + String(1)
  
        const quantidadeCerta = operacao === '+' 
          ? Number(quantidade)
          : Number(quantidade) * Number(quanidadeSimbolo)       
        
        await api.updateProduto(userId, produtoId, { quantidade: quantidadeAlterada });
  
        const novoHistorico = {
          users_id: userId,
          produto_id: produtoId,
          descricao: produtoDescricao,
          embalagem: produtoEmbalagem,
          operacao: operacao,
          quantidade: quantidadeCerta,
          responsavel: userName
        }
  
        await xhr.post('historico', novoHistorico);
  
        setVisible(false)  
      } else {
        alert('Não é possivel alterar o estoque para quantidade negativas !')
      }

    } catch (error) {
      alert(error)
    }
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Actions style={styles.container}>
          <View style={{flexDirection: 'column', alignItems: 'center', marginTop: '30%', justifyContent: 'center'}}>
            {uri === '' ? (null) : (
              <Image
                key={uri}
                source={{ uri: uri }}
                style={styles.uploadedImage}
              />
            )}      
            <Text style={styles.label}>Alteração de quantidade</Text>
            <Text style={styles.label}>Positiva ou negativa</Text>
            <NumericInput
              type={"plus-minus"}
              value={quantidade}
              onChange={t => setQuantidade(t)}
              totalWidth={width * 0.77}
              totalHeight={height * 0.07}
              iconSize={40}
              valueType='real'
              step={1}
              rounded
              textColor='black'
              iconStyle={{ color: '#FFF' }}
              rightButtonBackgroundColor='#164e63'
              leftButtonBackgroundColor='#164e63'
            />
            <RectButton style={styles.button} onPress={clickButtonAtualizar}>
              <Text style={styles.nextButtonText}>Atualizar</Text>
            </RectButton>
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AlterarQuantidade;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    color: '#164e63',
  },

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    justifyContent: 'center',
  },

  uploadedImage: {
    alignItems: 'center',
    width: width * 0.5,
    resizeMode: 'contain',
    height: height * 0.3,
    borderRadius: 20,
    marginBottom: 12,
    marginRight: 8,
    justifyContent: 'center'
  },

  label: {
    color: '#164e63',
    marginBottom: 8,
    fontSize: 20,
  },

  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#164e63',
    width: width * 0.77,
    height: height * 0.075,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
})