import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Login/index';
import InfoProduto from '../Pages/InfoProdutos/index';
import AddProdutoEdit from '../Pages/AddProdutoEdit/index';
import PreLoad from '../Pages/PreLoad/index';
// import Teste from '../Pages/Teste/index';
import QuantidadeEdit from '../Pages/AlterarQuantidade/index'
import Drawer from './Drawer';
import Header from '../components/header';
import Header2 from '../components/header2';
import Header4 from '../components/Header4';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen 
                name="Teste" 
                component={Teste}
                options={{
                    headerShown: true,
                    header: () => <Header2 title="Informações do produto" />
                }}  
            /> */}
      <Stack.Screen
        name="PreLoad"
        component={PreLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Estoque"
        component={Drawer}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="InfoProduto"
        component={InfoProduto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QuantidadeEdit"
        component={QuantidadeEdit}
        options={{
          headerShown: true,
          header: () => <Header4 title="Alterar quantidade" />
        }}
      />
      <Stack.Screen
        name="AddProdutoEdit"
        component={AddProdutoEdit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
