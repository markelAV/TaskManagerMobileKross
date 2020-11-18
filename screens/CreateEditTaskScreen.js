import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Icon, Content, Form, Item, Input, Label, Button, Text, Textarea } from 'native-base';
import {Image, StyleSheet, View} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import DateTimePicker from '@react-native-community/datetimepicker';

class CreateEditTaskScreen extends Component {
    constructor(props) {
        super(props);
        let task = this.props.route.params? this.props.route.params.task: null;
        if(task) {
            console.log(task);
            this.state = {
                name:task.title,
                date:new Date(),
                description:'',
                show:false,
                action: 'Edit task'
            };
            this.props.route.params.task = null;
        } else {
            this.state = {
                name:'',
                date:new Date(),
                description:'',
                show:false,
                action: 'New task'
            };
        }
    }
    _onPressButtonSave() {
        if(this.state.name === 'testTask') { //Fixme please!! complete
            alert('Access successfully');
        }
        else {
            alert('Access denied');
        }
    }
    _onShowDatePicker(mode) {
        this.setState({show: mode});
    }

    render() {
        if(!this.state.show){
            return (
                <Container style={styles.container}>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate('Calendar')}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{this.state.action}</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <Grid style={styles.page}>
                        <Row style={styles.rowForm}>
                            <Form style={{minWidth:300}}>
                                <Item fixedLabel>
                                    <Label>Name</Label>
                                    <Input style={styles.inputs} value={this.state.name} onChangeText={(text) => {this.setState({name: text})}} />
                                </Item>
                                <Item fixedLabel>
                                    <Label>Date</Label>
                                    <Input style={styles.inputs} onFocus={() => {this._onShowDatePicker(true)}} value={this.state.date.toString()}/>

                                </Item>
                                <Item style={{flex:1, flexDirection:'column', alignItems: 'left', marginTop:10}}>
                                    <Label>Description</Label>
                                    <Textarea style={styles.inputs}/>
                                </Item>
                            </Form>
                        </Row>
                        <Row>
                            <Button style={styles.buttonSign} block primary onPress={()=>this._onPressButtonSave(this)}>
                                <Text> Save </Text>
                            </Button>
                        </Row>
                    </Grid>
                </Container>
            );
        }
        else {
            return (
                <View style={{marginTop:200}}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={(event, selectedDate) => {this.setState({date: selectedDate})}} />
                        <Button onPress={()=>{this._onShowDatePicker(false)}}><Text>Done</Text></Button>
                </View>
            )
        }

    }
}

const logo = require('../recources/logoForLoginForm.png');
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
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
        marginTop:80
    },
    inputs: {
        width: '100%',
        marginTop:10
    },
    footer: {
        marginTop: 30
    }
});

export default CreateEditTaskScreen;

