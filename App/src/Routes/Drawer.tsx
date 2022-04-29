import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddProduto from '../Pages/AdicionarProduto/index';
import Perfil from '../Pages/Perfil/index'
import Home from '../Pages/Home/index';
import Header from '../components/header';
import Historico from '../Pages/Historico/index';
import Header2 from '../components/header2';
import Header3 from '../components/header3';
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {
                    paddingTop: 20,                           
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    header: () => <Header title="Selecione o mapa" />,
                    drawerLabel: 'Estoque',
                }}
            />
            <Drawer.Screen 
                name="AddProduto" 
                component={AddProduto}
                options={{
                    headerShown: false,
                    drawerLabel: 'Cadastrar produto',
                }}                
            />
            <Drawer.Screen 
                name="Historico"
                component={Historico}
                options={{
                    headerShown: false,                    
                }}
            />
        </Drawer.Navigator>
    );
}

export default Drawer;
