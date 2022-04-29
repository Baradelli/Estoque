import React, { useEffect, useState } from 'react';;
import { View, Text, ScrollView, Dimensions } from 'react-native';
import styles from '../styles';
import ProdutoImage from './image';
import AlterarQuantidade from '../dialog'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const DadosDoProduto = ({ produto, usuario, images }) => {
  const [visible, setVisible] = useState<Boolean>(false);
  
  const navigation = useNavigation();  

  const editarProduto = (id: number) => {
    navigation.navigate('AddProdutoEdit', { id });
  }  

  return (
    <>
      {images.map( image => (
        <AlterarQuantidade
          visible={visible}
          setVisible={setVisible}
          uri={image.url}
          userId={usuario.id}
          produtoId={produto.id}
          produtoQuantidade={produto.quantidade}
          produtoDescricao={produto.descricao}
          produtoEmbalagem={produto.embalagem}
          userName={usuario.nome}        
        />
      ))}
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
        {images.map(image => image.url === undefined 
          ? (
              null
            ) 
          : (<ProdutoImage 
              produto={produto} 
              usuario={usuario}
              images={images}
            />)
        )}
        <Text style={styles.label}>Código</Text>        
          <Text style={styles.input}>{produto.codigo}</Text> 

        <Text style={styles.label}>Descrição</Text>
          <Text style={[styles.input, { height: 110 }]}>
              {produto.descricao}
          </Text>

        <Text style={styles.label}>Embalagem</Text>
          <Text style={styles.input}>{produto.embalagem}</Text>

        <Text style={styles.label}>Código de barras</Text>
          <Text style={styles.input}>{produto.codigo_de_barras}</Text>

        <Text style={styles.label}>Estoque</Text>
        <View>
          <Text style={[styles.input, { width: '50%', height: height * 0.0825 }]}>{produto.quantidade}</Text>
        </View>
      </ScrollView>
      <>
        <View 
          style={{ 
            flexDirection: 'row', justifyContent: 'space-between', 
            paddingHorizontal: 20 
          }}
        >
          <View style={styles.editarDados}>
            <RectButton 
              style={styles.buttonEdit} 
              onPress={() => 
              editarProduto(produto.id)}
            >
              <Text style={styles.nextButtonText}>Editar Dados</Text>
            </RectButton>
          </View>
          <View style={styles.editarQuantidade}>
            <RectButton 
              style={styles.buttonEdit} 
              onPress={() => setVisible(true)}
            >
              <Text style={styles.nextButtonText}>Lançar</Text>
              <Text style={styles.nextButtonText}>Quantidade</Text>
            </RectButton>
          </View>
        </View>
      </>
    </>
  )
}

export default DadosDoProduto;