import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Logo from '../Images/Logo.png'
import Feather from "@expo/vector-icons/build/Feather";

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

const { height } = Dimensions.get('window');

export default function Header({title, showCancel = true}: HeaderProps) {
    const navigation = useNavigation();  
  
    function voltarParaHome() {
      navigation.navigate('Home');
    } 


    return(
        <View style={styles.container}>

            <View />

            <Image style={styles.Logo} source={ Logo } />

            <BorderlessButton onPress={voltarParaHome}>
                <Feather name="x" size={24} color="#ff669d" style={styles.x}/>
            </BorderlessButton>

        </View>
    );
}

const styles = StyleSheet.create({
    x: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,
        height: height * 0.15,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    title: {
        color: '#8fa7be',
        fontSize: 16,        
    },

    Logo: {
        width: 300,
        height: 80,
    },
})