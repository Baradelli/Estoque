import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const stylesImage = StyleSheet.create({
	imagesContainer: {
		justifyContent: 'center',
		resizeMode: 'cover',
		alignItems: 'center',
	},

	image: {
		width: width * 0.88,
		marginRight: 20,
		height: height * 0.3,
		resizeMode: 'contain',
	},
})

export default stylesImage;