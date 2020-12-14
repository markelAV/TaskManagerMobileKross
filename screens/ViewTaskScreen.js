import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Icon, Content, Form, Item, Input, Label, Button, Text, Textarea, ActionSheet } from 'native-base';
import {Image, StyleSheet, View} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {IMLocalized, init} from '../locale/IMLocalized';

const imageLogo = require('../recources/logo1.jpg');
var BUTTONS = [IMLocalized('operation_edit_task'), IMLocalized('operation_complete_task'), IMLocalized('operation_delete'), IMLocalized('operation_cancel')];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;

class ViewTaskScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        init();
        BUTTONS = [IMLocalized('operation_edit_task'), IMLocalized('operation_complete_task'), IMLocalized('operation_delete'), IMLocalized('operation_cancel')];
    }

    _onPressButtonSave() {
            alert('Task complete successfully')
    }

    _onPressButtonMenu(buttonIndex) {
        switch (buttonIndex) {
            case 0:
                this._onPressButtonEdit();
                break;
            case 1:
                this._onPressButtonSave();
                break;
            case 2:
                this._onPressButtonDelete();
                break;
        }
    }
    _onPressButtonEdit() {
        let item = this.props.route.params.task;
        console.log(item.title);
        this.props.navigation.navigate('CreateEditTask',{task: item})
    }

    _onPressButtonDelete() {
        alert("Delete task successful"); //Fixme please!!! complete delete
        this.props.navigation.navigate('Calendar');
    }

    render() {
        init();
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Calendar')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{IMLocalized('header_view_task')}</Title>
                    </Body>
                    <Right>
                        <Button transparent  onPress={() =>
                            ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: IMLocalized('label_actions_for_task')
                                },
                                buttonIndex => {
                                    this._onPressButtonMenu(buttonIndex);
                                }
                            )}>
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
                            <Text>{IMLocalized('operation_complete')}</Text>
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
        marginTop:80,
        flex:1
    }
});

export default ViewTaskScreen;
