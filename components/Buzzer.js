import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class Buzzer extends Component {
	buzz = async () => {
		await Audio.Sound.createAsync(
			{ uri: 'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
			{ shouldPlay: true }
		);
	};
	render() {
		return (
			<View>
				<TouchableOpacity style={[styles.buzzer, {backgroundColor: this.props.color}]}	onPress={this.buzz}>
					<Text style={[styles.press, {color: this.props.txtColor}]}>
						Press me!
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buzzer: {
		alignSelf: "center",
		alignItems: "center",
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "black",
		width: 200,
		height: 200,
		marginTop: 200,
	},
	press:{
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 85
	}
});