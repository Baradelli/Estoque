import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('screen');
const borderColor = '#164e63';
const primaryColor = '#164e63';
const backgroundColor = '#e9ecef';

const styles = StyleSheet.create({
	containerspinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},

	icon: {
		marginRight: 15,
		color: '#15B6D6'
	},

	container: {
		flex: 1,
	},

	title: {
		color: '#11617E',
		fontSize: 24,
		marginBottom: 20,
		paddingBottom: 24,
		borderBottomWidth: 0.8,
		width: '100%',
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
		backgroundColor: '#FFF',
		borderWidth: 1.4,
		color: '#11617E',
		borderColor: '#d3e2e6',
		borderRadius: 20,
		height: height * 0.065,
		paddingVertical: 18,
		paddingHorizontal: 24,
		marginBottom: 16,
		textAlignVertical: 'top',
	},

	inputSemImage: {
		backgroundColor: '#FFF',
		borderWidth: 1.4,
		color: '#11617E',
		borderColor: '#d3e2e6',
		borderRadius: 20,
		height: height * 0.1,
		paddingVertical: 18,
		paddingHorizontal: 24,
		marginBottom: 16,
		textAlignVertical: 'top',
	},

	button: {
		backgroundColor: '#164e63',
		width: 355,
		height: 60,
		paddingHorizontal: 30,
		marginVertical: 10,
		borderRadius: 20,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
	},

	nextButtonText: {
		fontSize: 15,
		color: '#FFF',
		alignItems: 'center',
	},

	buttonTroca: {
		backgroundColor: 'rgba(22, 78, 99, 1)',
		width: 177.5,
		height: 45,
		paddingHorizontal: 30,
		marginVertical: 10,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},

	buttonTrocaDesativado: {
		backgroundColor: 'rgba(22, 78, 99, 0.8)',
		width: 177.5,
		height: 45,
		paddingHorizontal: 30,
		marginVertical: 10,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},

	troca: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	buttonEdit: {
		backgroundColor: 'rgba(22, 78, 99, 1)',
		height: 55,
		paddingHorizontal: 25,
		marginVertical: 10,
		borderWidth: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 10,
	},

	editarDados: {
		flex: 1,
		paddingRight: 5
	},

	editarQuantidade: {
		flex: 1
	}
})

export default styles;