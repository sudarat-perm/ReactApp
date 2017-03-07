import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardSection = ({ children }) => {
	return (
		<View style={styles.containerStyle}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		borderColor: '#ddd',
		position: 'relative'
	}
})

export default CardSection