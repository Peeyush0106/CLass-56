import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Buzzer from '../components/Buzzer';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />
				<Buzzer color={this.props.navigation.getParam("color")} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30
	}
});