import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Text} from 'native-base';
//CalendarScreen
class StartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
            </View>
        );
    }

}

const logo = require('../recources/logoForLoginForm.png');
const styles = StyleSheet.create({
    container: {
        marginTop: -50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default StartScreen;
