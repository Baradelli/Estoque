import { StyleSheet, Dimensions } from 'react-native'; 

const { width } = Dimensions.get('window'); 
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    input: {
      backgroundColor: '#FFFFFF',
      width: width * 0.85,
      height: height * 0.075,
      paddingHorizontal: 30,
      marginVertical: 10,
      borderRadius: 20,
      borderWidth: 1,
    },
  
    logo: {
      width: width * 0.85,
      height: height * 0.1,
      marginBottom: 85,
    },
  
    button: {
      backgroundColor: '#164e63',
      width: width * 0.85,
      height: height * 0.075,
      paddingHorizontal: 30,
      marginVertical: 10,
      borderRadius: 20,
      borderWidth: 1,    
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
  
    buttonText: {
      fontSize: 26,
      color: '#FFFFFF',
    }
  });

export default styles;
