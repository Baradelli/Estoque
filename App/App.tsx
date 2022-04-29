import React from 'react';
import {  Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/Routes/Routes'
import { AuthProvider } from './src/contexts/auth';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#164e63',
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer theme={MyTheme}>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}
