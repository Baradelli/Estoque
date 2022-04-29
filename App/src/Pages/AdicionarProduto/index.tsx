import React, { useEffect, useState } from "react";
import { 
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Alert 
} from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import DialogAction from '../../components/dialogAction';
import styles from './styles';
import xhr from "../../services/xhr";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header2 from '../../components/header2';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const AddProduto = () => {
  const [images, setImages] = useState<string[]>([]);
  const [quantidade, setQuantidade] = useState(0)
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [embalagem, setEmbalagem] = useState('');
  const [codigoDeBarras, setCodigoDeBarras] = useState('');
  const [visible, setVisible] = useState(false);
  const [uri, setUri] = useState('');
  const [user, setUser] = useState<Usuario>({} as Usuario);

  const getUser = async () => {
    const json =  await AsyncStorage.getItem('user');
    if (json) {
      setUser(JSON.parse(json));      
    }
  }

  useEffect(() => {
    getUser()
  })

  const route = useRoute();

  const handleCreateProduto = async () => {
    try {
      if (images.length > 1) {
        Alert.alert('So é permitido uma imagem por produto !')
        return;
      }

      if (!descricao) {
        Alert.alert('Informe a descrição do produto');
        return;
      }

      if (!codigo) {
        Alert.alert('Informe o código do produto');
        return;
      }

      if (!embalagem) {
        Alert.alert('Informe a embalagem do produto');
        return;
      }
    } catch (error) {
      Alert.alert('pls')
    }

    const data = new FormData();

    data.append('users_id', String(user.id));
    data.append('codigo', codigo);
    data.append('descricao', descricao);
    data.append('embalagem', embalagem);
    data.append('codigo_de_barras', codigoDeBarras);
    data.append('quantidade', String(quantidade));

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })

    await xhr.post('produto', data);

    setImages([])
    setCodigo('')
    setDescricao('')
    setEmbalagem('')
    setCodigoDeBarras('')

    navigation.navigate('Home');
  }

  async function handleSelectImages(origem: string) {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (images.length === 1) {
      Alert.alert('So é permitido uma imagem por produto !')
      return;
    }

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

      setImages([...images, image]);
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

      setImages([...images, image]);
    }
  }

  const navigation = useNavigation();

  const clickImage = (image) => {
    setUri(image)
    setVisible(true)
  }

  const excluirImage = (uriImage: string) => {
    setImages(images.splice(images.indexOf(uriImage), 1));
    setImages(images.splice(images.indexOf(uriImage), 1));
    setVisible(false);
  }

  return (
    <>
      <Header2 title="Cadastrar produto" />
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
        <>
          <DialogAction
            excluirImage={excluirImage}
            visible={visible}
            setVisible={setVisible}
            uri={uri}
          />
          <Text style={styles.label}>Código <Text style={styles.obrigatorio}>*</Text></Text>
          <TextInput
            value={codigo}
            style={styles.input}
            maxLength={5}
            onChangeText={t => setCodigo(t)}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Descrição <Text style={styles.obrigatorio}>*</Text></Text>
          <TextInput
            value={descricao}
            style={[styles.input, { height: 86 }]}
            multiline
            maxLength={60}
            onChangeText={t => setDescricao(t)}
          />
          <Text style={styles.label}>Embalagem <Text style={styles.obrigatorio}>*</Text></Text>
          <TextInput
            value={embalagem}
            style={styles.input}
            maxLength={10}
            onChangeText={t => setEmbalagem(t)}
          />
        </>
        <Text style={styles.label}>Código de barras</Text>
        <View style={styles.codigoDeBarras}>
          <TextInput
            style={[styles.inputcodigo]}
            multiline
            maxLength={13}
            value={codigoDeBarras}
            onChangeText={t => setCodigoDeBarras(t)}
          />
          <TouchableOpacity
            style={styles.imagesInputBarCode}
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="barcode-scan" size={24} color="#0e7490" />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Fotos</Text>

        <View style={styles.uploadImagesContainer}>
          {images.map(image => {
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
            style={styles.imagesInputGaleria}
            onPress={() => handleSelectImages('galeria')}
          >
            <Feather name="image" size={24} color="#0e7490" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imagesInputCamera}
            onPress={() => handleSelectImages('camera')}
          >
            <Feather name="camera" size={24} color="#0e7490" />
          </TouchableOpacity>
        </View>
        <RectButton style={styles.button} onPress={handleCreateProduto}>
          <Text style={styles.nextButtonText}>Cadastrar</Text>
        </RectButton>
      </ScrollView>
    </>
  );
}

export default AddProduto;
