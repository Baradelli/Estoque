import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    color: '#164e63',
    marginBottom: 8,
    fontSize: 15,
  },

  codigoDeBarras: {
    flexDirection: 'row',
  },

  inputcodigo: {
    flex: 4.8,
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: height * 0.065,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
    color: 'hsl(196, 64%, 35%)',    
  },

  imagesInputBarCode: {
    flex: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#0e7490',
    borderWidth: 1.4,
    borderRadius: 20,
    height: height * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,    
    marginLeft: 10,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: height * 0.065,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
    color: 'hsl(196, 64%, 35%)'
  },

  icon: {
    color: '#0e7490',
  },

  uploadImagesContainer: {
    flexDirection: 'row',
  },

  uploadedImage: {
    alignItems: 'center',
    resizeMode: 'contain',
    width: width * 0.2,
    height: height * 0.1,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  imageContainer: {
    flexDirection: 'row',
  },

  imagesInputGaleria: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#0e7490',
    borderWidth: 1.4,
    borderRadius: 20,
    height: height * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,    
  },

  imagesInputCamera: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#0e7490',
    borderWidth: 1.4,
    borderRadius: 20,
    height: height * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,    
    marginLeft: 10,
  },

  button: {
    backgroundColor: '#164e63',    
    height: height * 0.065,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  obrigatorio: {
    color: 'red',
  },


  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
    alignItems: 'center',
  },
})

export default styles;
