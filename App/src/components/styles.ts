import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    nextButtonText: {
        fontSize: 16,
        color: '#FFF',
        alignItems: 'center',
    },
    
    button: {       
        backgroundColor: '#164e63',
        width: '90%',
        marginLeft: '5%',
        height: 45,
        paddingHorizontal: 30,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,    
        justifyContent: 'center',
        alignItems: 'center',
    },

    subcontainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },

    containerAvatar: {
        flexDirection: 'row',
        height: 80,
        paddingLeft: 10,
        marginVertical: 20,        
    },

    avatar: {
        paddingRight: 10,
        paddingTop: 15,
    },

    text: {
        marginTop: 20,
        paddingBottom: 20,        
    },

    escrita: {
        fontSize: 16,
        color: 'black',
        alignItems: 'center',
    }
})

export default styles;
