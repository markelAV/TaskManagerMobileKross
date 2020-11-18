import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {Image, StyleSheet, View} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };
    }

    _onPressButtonSign() {
        if(this.state.username === 'user1' && this.state.password === '12345') { //Fixme please!! complete
            alert('Access successfully');
        }
        else {
            alert('Access denied');
        }
    }

    render() {
    return (
        <Container style={styles.container}>
            <Grid style={styles.page}>
                <Row style={styles.rowLogo}>
                    <Image
                    style={styles.logo}
                    source={logo}
                    />
                </Row>
                <Row style={styles.rowForm}>
                    <Form>
                        <Item inlineLabel style={styles.inputs}>
                            <Label>Username</Label>
                            <Input style={styles.inputs} onChangeText={(text) => {this.setState({username: text})}} />
                        </Item>
                        <Item inlineLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => {this.setState({password: text})}} />
                        </Item>
                        <Button style={styles.buttonSign} block primary onPress={()=>this._onPressButtonSign(this)}><Text> Sign In </Text></Button>
                    </Form>
                </Row>
                <Row style={styles.rowFooter}>
                    <Text> If you don`t have account then may create his</Text>
                </Row>
            </Grid>
        </Container>
    );
  }

}

const logo = require('../recources/logoForLoginForm.png');
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        paddingLeft : 16,
        paddingRight : 16,
        backgroundColor: 'white'
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    rowLogo: {
        marginTop:80
    },
    rowForm: {
        marginTop: 100
    },
    rowFooter: {
        marginTop: 70
    },
    logo: {
        width: 200,
        height: 200,
    },
    link: {
        color:'blue'
    },
    buttonSign: {
        marginTop:20
    },
    inputs: {
        minWidth:280
    },
    footer: {
        marginTop: 30
    }
});

export default LoginScreen;
