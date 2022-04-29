import React from 'react';
import { Dimensions, View } from 'react-native';
import Lottie from 'lottie-react-native';
import lf30_editor_fxdva0xh from '../../lf30_editor_fxdva0xh.json';

const { width } = Dimensions.get('window'); 

const LottieEmpty = () => {
  return(
    <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      width: width * 0.94
    }}
    >
      <Lottie 
        resizeMode="contain" 
        source={lf30_editor_fxdva0xh}  
        autoPlay 
        loop
      />
  </View>
  )}

export default LottieEmpty;
