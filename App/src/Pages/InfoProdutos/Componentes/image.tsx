import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import AlterarQuantidade from '../dialog';
import styles from '../styles';
import stylesImage from '../stylesImage';

const ProdutoImage = ({ produto, usuario, images }) => {
  const [visible, setVisible] = useState<Boolean>(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      {images.map( image => (
        <AlterarQuantidade
          visible={visible}
          setVisible={setVisible}
          uri={image.url || ""}
          userId={usuario.id}
          produtoId={produto.id}
          produtoDescricao={produto.descricao}
          produtoQuantidade={produto.quantidade}
          produtoEmbalagem={produto.embalagem}
          userName={usuario.nome}
      />
      ))}
      <View style={stylesImage.imagesContainer}>
        {images === undefined ? (<View style={stylesImage.image}/>) : (
          <>
            {images.map( image => (
              <>
              <Image
                key={image.id}
                style={stylesImage.image}
                source={{ uri: image.url }}
              />
            </>
            ))}
          </>          
        )}
      </View>
      <View style={styles.title} />
    </ScrollView>
  )
}

export default ProdutoImage;