import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from './styles';
import xhr from "../../services/xhr";
import Spinner from "react-native-loading-spinner-overlay";
import { RectButton } from "react-native-gesture-handler";
import NumericInput from 'react-native-numeric-input';
import api from "../../services/api";
import { Images } from '../../services/types';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

interface ProdutoRouteParams {
  id: number
}

interface Produto {
  codigo: number,
  descricao: string,
  embalagem: string,
  codigo_de_barras: string,
  quantidade: number,
  images: Array<{
    id: number;
    url: string;
  }>;
}

const QuantidadeEdit = () => {
  const [images, setImages] = useState<Images[]>([]);
  const [vezesX, setVezesX] = useState(1);
  const [quantidade, setQuantidade] = useState<number>(1);
  const [produto, setProduto] = useState<Produto>();
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')

  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as ProdutoRouteParams

  const getEstoqueId = async () => {
    try {
      const { data } = await api.getInfoProduto(params.id)
      setProduto(data);
      setImages(data.images)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getEstoqueId()
  }, [params.id])

  // if(!produto) {
  //     return (
  //     <View style={styles.containerspinner}>
  //     <Spinner
  //       visible={true}

  //     />
  //   </View>
  //     )
  // }   

  const cadastarVoltarParaInfoProduto = async () => {

    const data = new FormData();

    data.append('quantidade', String(quantidade));

    await xhr.post('produto', data); // trocar por update 

    navigation.navigate('InfoProduto');
  }

  const voltar = () => {
    navigation.navigate('InfoProduto');
  }

  const Data = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    const dataAtual = dia + '/' + mes + '/' + ano;
    const horaAtual = hora + ':' + min + ':' + seg;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {/* {images.map(image => {                    
                    return (                       
                            <Image
                                key={image.id}
                                source={{ uri: image.url }}
                                style={styles.image}
                            />                      
                        );
                    })} */}
        </ScrollView>
      </View>
      <View style={styles.title} />

      <Text style={styles.label}>Quantidade</Text>
      <NumericInput
        type={"plus-minus"}
        value={quantidade}
        onChange={t => setQuantidade(t)}
        totalWidth={width * 0.88}
        totalHeight={height * 0.07}
        iconSize={40}
        valueType='real'
        step={1}
        rounded
        minValue={1}
        textColor='black'
        iconStyle={{ color: '#FFF' }}
        rightButtonBackgroundColor='#164e63'
        leftButtonBackgroundColor='#164e63'
      />
      <RectButton style={styles.button} onPress={Data}>
        <Text style={styles.nextButtonText}>Atualizar</Text>
      </RectButton>
    </ScrollView>
  );
}

export default QuantidadeEdit;
