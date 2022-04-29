import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import { Dialog, Portal } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const BarcodeScan = ({ visible, setVisible, setCodigoDeBarras }: string | number | any) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: string | any | number) => {
    setScanned(true);
    setCodigoDeBarras(data)
    setVisible(false)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Actions style={styles.container}>
          <View style={styles.uploadedImage}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default BarcodeScan;

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
    alignItems: 'center',
    width: width * 0.818,
    resizeMode: 'contain',
    height: height * 0.5,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },
})