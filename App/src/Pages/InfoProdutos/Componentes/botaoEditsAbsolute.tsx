import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Produto } from '../Interface/interfaces';
import styles from '../styles';

const ButtonEditAbsolute = (setUri, setVisible) => {
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const clickAlterarQuantidade = (image) => {
        setUri(image)
        setVisible(true)
    }

    const clickAlterarQuantidadeNoImage = () => {
        setVisible(true)
    }

    const navigation = useNavigation();

    const editarProduto = (id: number) => {
        navigation.navigate('AddProdutoEdit', { id });
    }
    
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View>
                    <RectButton style={styles.buttonEdit} onPress={() => editarProduto(produto.id)}>
                        <Text style={styles.nextButtonText}>Editar Dados</Text>
                    </RectButton>
                </View>
                {!produto.images ? (
                    <>
                        <View>
                            <RectButton style={styles.buttonEdit} onPress={() => clickAlterarQuantidadeNoImage()}>
                                <Text style={styles.nextButtonText}>Alterar</Text>
                                <Text style={styles.nextButtonText}>Quantidade</Text>
                            </RectButton>
                        </View>
                    </>
                ) : (
                    <>
                        {produto.images.map((image) => (
                            <>
                                <View>
                                    <RectButton style={styles.buttonEdit} onPress={() => clickAlterarQuantidade(image.url)}>
                                        <Text style={styles.nextButtonText}>Lançar</Text>
                                        <Text style={styles.nextButtonText}>Quantidade</Text>
                                    </RectButton>
                                </View>
                            </>
                        ))}
                    </>
                )}
            </View>
        </>
    )
}

export default ButtonEditAbsolute;