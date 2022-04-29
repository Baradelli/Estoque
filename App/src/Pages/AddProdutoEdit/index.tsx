import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import DialogAction from '../../components/dialogAction';
import styles from './styles';
import Header4 from '../../components/Header4';
import api from "../../services/api";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProdutoRouteParams {
  id: number
}

interface Produto {
  id: number,
  users_id: number,
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

const AddProdutoEdit = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imageEdit, setImageEdit] = useState<string[]>([]);
  const [path, setPath] = useState('');
  const [codigoDeBarras, setCodigoDeBarras] = useState('');
  const [codigo, setCodigo] = useState<number>();
  const [descricao, setDescricao] = useState('');
  const [embalagem, setEmbalagem] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [uri, setUri] = useState('');
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [userSet, setUserSet] = useState<Boolean>(false);

  const route = useRoute();

  const pegarProduto = async () => {
    try {
      const params = route.params as ProdutoRouteParams

      const json = await AsyncStorage.getItem('user');

      if (!json) {
        return
      }

      const user = JSON.parse(json);      

      const { data } = await api.getInfoProduto(user.id, params.id);

      setProduto(data);
      setDescricao(data.descricao);
      setCodigo(data.codigo);
      setEmbalagem(data.embalagem);
      setCodigoDeBarras(data.codigo_de_barras);
      setImages(data.images);

    } catch (error) {
      alert(error)
    }
  }

  async function handleSelectImages(origem: string) {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status != 'granted') {
      alert('Precisamos de acesso das suas fotos...');
      return;
    }

    if (origem === 'camera') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (result.cancelled) {
        return;
      }

      const { uri: image } = result;

      setImageEdit([...imageEdit, image]);
    }

    if (origem === 'galeria') {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (result.cancelled) {
        return;
      }

      const { uri: image } = result;

      setImageEdit([...imageEdit, image]);
    }
  }

  const navigation = useNavigation();

  const cadastarVoltarParaInfoProduto = async ( id: number ) => {
    try {
      if (!descricao) {
        alert('Informe a descricao do produto');
        return;
      }

      if (!codigo) {
        alert('Informe o código do produto');
        return;
      }

      if (!embalagem) {
        alert('Informe a embalagem do produto');
        return;
      }
    } catch (error) {
      alert(error)
    }
    
    const dadosAtualizados = {
      codigo: codigo,
      descricao: descricao,
      embalagem: embalagem,
      codigo_de_barras: codigoDeBarras,      
    }

    const data = new FormData();

    imageEdit.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })    

    await api.updateProduto(produto.users_id, produto.id, dadosAtualizados );  

    if(imageEdit.length) {
      await api.teste(produto.id, data);
    }    

    navigation.navigate('InfoProduto', { id } );
  }

  const clickImage = (image) => {
    setUri(image);
    setVisible(true);
  }

  const excluirImage = (uriImage: string, uriimageEdit: string) => {
    setImageEdit(imageEdit.splice(imageEdit.indexOf(uriimageEdit), 1));
    setImageEdit(imageEdit.splice(imageEdit.indexOf(uriimageEdit), 1));
    setImages(images.splice(images.indexOf(uriImage), 1));
    setImages(images.splice(images.indexOf(uriImage), 1));
    setVisible(false);
  }

  useEffect(() => {
    pegarProduto()
  }, [userSet])

  if (codigo === undefined) {
    return (
      <View style={styles.containerspinner}>
        <Spinner visible={true} />
      </View>
    )
  }

  return (
    <>
      <Header4 title="Editar Dados do Produto"/>
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
        <DialogAction
          excluirImage={excluirImage}
          visible={visible}
          setVisible={setVisible}
          uri={uri}
        />
      {images.length === 0 ? (null) : (
        <>
          <View style={styles.imagesContainer}>
            <ScrollView horizontal pagingEnabled>
              {images.map(image => {
                return (
                  <TouchableOpacity onPress={() => clickImage(image.url)}>
                    <Image
                      key={image.id}
                      source={{ uri: image.url }}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.title} />
        </>
        )}
        <Text style={styles.label}>Código<Text style={styles.obrigatorio}>*</Text></Text>
        <TextInput
          style={styles.input}
          maxLength={5}
          onChangeText={t => setCodigo(Number(t))}
          keyboardType="numeric"
          value={String(codigo)}
        />
        <Text style={styles.label}>descricao <Text style={styles.obrigatorio}>*</Text></Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          multiline
          maxLength={60}
          onChangeText={t => setDescricao(t)}
          value={descricao}
        />
        <Text style={styles.label}>Embalagem <Text style={styles.obrigatorio}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={embalagem}
          maxLength={10}
          onChangeText={t => setEmbalagem(t)}
        />
        <Text style={styles.label}>Código de barras</Text>
        <TextInput
          style={[styles.input]}
          multiline
          maxLength={13}
          value={codigoDeBarras}
          onChangeText={t => setCodigoDeBarras(t)}
        />
        {images.length === 0 ? (
          <>
            <Text style={styles.label}>Fotos</Text>

            <View style={styles.uploadImagesContainer}>
              {imageEdit.map(image => {
                return (
                  <TouchableOpacity onPress={() => clickImage(image)}>
                    <Image
                      key={image}
                      source={{ uri: image }}
                      style={styles.uploadedImage}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imagesInputG}
                onPress={() => handleSelectImages('galeria')}
              >
                <Feather name="image" size={24} color="#0e7490" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imagesInputC}
                onPress={() => handleSelectImages('camera')}
              >
                <Feather name="camera" size={24} color="#0e7490" />
              </TouchableOpacity>
            </View>
          </>
        ) : null}
        <RectButton style={styles.button} onPress={
            () => {cadastarVoltarParaInfoProduto(produto.id)
          }}>
          <Text style={styles.nextButtonText}>Atualizar</Text>
        </RectButton>
      </ScrollView>
    </>
  );
}

export default AddProdutoEdit;
