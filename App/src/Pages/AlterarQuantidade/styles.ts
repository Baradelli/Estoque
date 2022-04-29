import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 
const { height } = Dimensions.get('window');

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
    
    title: {
        fontWeight: 'bold',
        color: '#11617E',
        fontSize: 24,
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6',
    },

    containerspinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
      },

      button: {
        backgroundColor: '#164e63',
        width: width * 0.88,
        height: height * 0.075,
        paddingHorizontal: 30,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 1,    
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    buttonX: {
        backgroundColor: '#164e63',
        width: width * 0.26,
        height: height * 0.075,
        paddingHorizontal: 30,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 1,    
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },


    nextButtonText: {
        fontSize: 16,
        color: '#FFF',
        alignItems: 'center',
    },

    label: {
        color: '#164e63',
        marginBottom: 8,
        fontSize: 20,
    },

    inputQuantidade: {
        backgroundColor: '#FFF',
        marginRight: 15,
        width: width * 0.43,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: height * 0.07,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
        borderWidth: 1.4,
    },
})

export default styles;
