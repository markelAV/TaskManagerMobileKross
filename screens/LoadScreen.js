import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'native-base';

class LoadScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_image}>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                </View>
                <Text style={styles.text}>Loading...</Text>
            </View>
        );
    }
}

const logo = require('../recources/pencil.gif');
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: 200,
        height: 250,
        marginTop: -150,
    },
    container_image: {
        paddingLeft: 100,
    },
    text: {
        marginTop: 20,
        fontSize: 24,
    }
});


export default LoadScreen;
