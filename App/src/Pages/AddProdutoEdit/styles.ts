import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    width: width * 0.88,
    height: height * 0.3,
    resizeMode: 'cover',
  },

  image: {
    width: width * 0.88,
    height: height * 0.3,
    resizeMode: 'contain',
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: '#11617E',
    fontSize: 24,
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6',
  },

  label: {
    color: '#164e63',
    marginBottom: 8,
    fontSize: 15,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
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
  },

  iconContainer: {
    borderColor: '#d3e2e6',
    marginRight: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: '#15B6D6',
  },

  uploadImagesContainer: {
    flexDirection: 'row',
  },

  uploadedImage: {
    width: width * 0.2,
    height: height * 0.1,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  imagesInputG: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#0e7490',
    borderWidth: 1.4,
    borderRadius: 20,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    width: width * 0.42,
  },

  imagesInputC: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#0e7490',
    borderWidth: 1.4,
    borderRadius: 20,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    width: width * 0.42,
    marginLeft: 10,
  },

  imageContainer: {
    flexDirection: 'row',
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  button: {
    backgroundColor: '#164e63',
    width: width * 0.86,
    height: height * 0.075,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  },

  containerspinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
    alignItems: 'center',
  },

  obrigatorio: {
    color: 'red',
  },
})

export default styles;
