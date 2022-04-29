import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window'); 
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: width * 0.9,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles;
