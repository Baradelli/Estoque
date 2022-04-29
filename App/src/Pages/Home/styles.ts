import { StyleSheet, Dimensions } from 'react-native'; 

const { width } = Dimensions.get('window'); 
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    nextButtonText: {
        fontSize: 16,
        color: '#FFF',
        alignItems: 'center',
    },

    containerspinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },

    button: {
        backgroundColor: '#164e63',
        width: 0,
        height: 56,
        paddingHorizontal: 30,
        borderRadius: 20,
        borderWidth: 1,    
        justifyContent: 'center',
        alignItems: 'center',
      },

    filtro: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6',
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
        width: 200,
        marginRight: 10,
    },

    label: {
        fontWeight: 'bold',
        color: '#164e63',
        marginBottom: 8,
        fontSize: 15,
    },

    componente: {
        color: '#FFF'
    },

    containerSub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    produtoImagem: {
        backgroundColor: '#FFF',
        width: width * 0.2,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
    },

    digitado: {
        marginBottom: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
      },

    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6',
        padding: 5,
    },

    titulo: {
        color: '#11617E',
        fontSize: 30,
        paddingBottom: 15,
        fontWeight: 'bold',
        borderBottomWidth: 0.8,
        borderBottomColor: '#D3E2E6',
        paddingTop: 15,
    },

    tText: {
        width: width * 0.6,
        fontSize: 15,
        color: '#11617E',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 15,
        color: '#164e63',
    },

})

export default styles;

