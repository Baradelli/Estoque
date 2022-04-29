import * as React from 'react';
import { View } from 'react-native'
import { Image } from 'react-native'
import { Button, Dialog, Portal } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native'; 

const { width } = Dimensions.get('window'); 
const { height } = Dimensions.get('window');

const DialogAction = ({ visible, setVisible, uri, excluirImage }: string | number | any) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Actions style={styles.container}>
          <Image 
            key={uri}
            source={{ uri: uri }}
            style={styles.uploadedImage}
          />
          <View style={styles.subContainer}>
            <Button onPress={() => setVisible(false)}>Cancelar</Button>
            <Button onPress={() => excluirImage()}>Deletar</Button>
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogAction;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    color: '#164e63',
  },

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: width,
    height: height * 0.65,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  uploadedImage: {
    alignItems:'center',
    width: width * 0.8,
    resizeMode: 'contain',
    height: height * 0.5,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },
})