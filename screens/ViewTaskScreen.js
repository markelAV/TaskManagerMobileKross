import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Icon, Content, Form, Item, Input, Label, Button, Text, Textarea } from 'native-base';
import {Image, StyleSheet, View} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const imageLogo = require('../recources/logo1.jpg')
class ViewTaskScreen extends Component {
    _onPressButtonSave() {
            alert('Access successfully')
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Calendar')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Grid style={styles.page}>
                    <Row style={{maxHeight:50, marginTop:20}}>
                        <Text style={styles.nameTask}>{this.props.route.params?.task.title || "Name task"}</Text>
                    </Row>
                    <Row style={{maxHeight:30}}>
                        <Text style={styles.date}>{new Date(this.props.route.params?.task.date).toDateString() + ' ' + this.props.route.params?.task.hour}</Text>
                    </Row>
                    <Row style={{maxHeight:100, marginTop:10}}>
                        <Text  style={styles.description}>{this.props.route.params?.task.description}</Text>
                    </Row>
                    <Row>
                        <Button style={styles.buttonWork} block primary onPress={()=>this._onPressButtonSave(this)}>
                            <Text> Save </Text>
                        </Button>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: 'white'
    },
    page: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        paddingLeft:15,
        paddingRight:15
    },
    nameTask: {
        marginTop:10,
        fontSize:28,
        fontWeight: 'bold'
    },
    date: {
        fontSize:16,
    },
    description: {
        fontSize:20,
    },
    buttonWork: {
        marginTop:80
    }
});

export default ViewTaskScreen;
