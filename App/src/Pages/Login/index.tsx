import React, { useState } from "react";
import { TextInput, View, Image, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Logo from '../../Images/Logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navegation = useNavigation();
    const [email, setEmail] = useState('admin');
    const [password, setPassword] = useState('admin');

    const handlePress = async () => {
        try {
            if(!email) {
                Alert.alert('Por favor digite o email');
                return;
            }

            if(!password) {
                Alert.alert('Por favor digite a senha');
                return;
            }

            const params = { email, password };

            const { data } = await api.login(params);

            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('user', JSON.stringify(data.user));
            
            navegation.navigate('Estoque')
        } catch (error) {
            console.log(error);
            Alert.alert('Email ou senha inválidos');
        }
    } 

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={ Logo } />
            <TextInput
                value={email}
                style={styles.input}
                placeholder="Digite seu email"
                onChangeText={t=>setEmail(t)}
            />
            <TextInput
                value={password}
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChangeText={t=>setPassword(t)}
            />
            <RectButton style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
        </View>
    );
}

export default Login;
