import React, { Component } from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Icon,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
    Textarea,
    ActionSheet
} from 'native-base';
import {Image, StyleSheet, View} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import DateTimePicker from '@react-native-community/datetimepicker';
import {IMLocalized, init} from '../locale/IMLocalized';

var BUTTONS = [IMLocalized('operation_complete_task'), IMLocalized('operation_delete'), IMLocalized('operation_cancel')];
var DESTRUCTIVE_INDEX = 1;
var CANCEL_INDEX = 2;

class CreateEditTaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            date:new Date(),
            description:'',
            show:false,
            action: IMLocalized('header_create_task')
        };
    }
    __onPressButtonSave() {
        alert('Task complete successfully')
    }

    _onPressButtonMenu(buttonIndex) {
        switch (buttonIndex) {
            case 0:
                this._onPressButtonSave();
                break;
            case 1:
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

    _onShowDatePicker(mode) {
        this.setState({show: mode});
    }

    render() {
        init();
        let task =this.props.route.params.task;
        if(task) {
            console.log(task);
            this.state = {
                name:task.title,
                date:task.date,
                description:task.description,
                show:false,
                action: IMLocalized('header_edit_task')
            };
            this.props.route.params.task = null;
        }
        if(!this.state.show){
            return (
                <Container style={styles.container}>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate('Calendar', {})}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{this.state.action}</Title>
                        </Body>
                        <Right>
                            <Button transparent disabled={this.state.action === IMLocalized('header_create_task')}  onPress={() =>
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
                        <Row style={styles.rowForm}>
                            <Form style={{minWidth:300}}>
                                <Item fixedLabel>
                                    <Label>{IMLocalized('label_name')}</Label>
                                    <Input style={styles.inputs} value={this.state.name} onChangeText={(text) => {this.setState({name: text})}} />
                                </Item>
                                <Item fixedLabel>
                                    <Label>{IMLocalized('label_date')}</Label>
                                    <Input style={styles.inputs} onFocus={() => {this._onShowDatePicker(true)}} value={this.state.date.toString()}/>

                                </Item>
                                <Item style={{flex:1, flexDirection:'column', alignItems: 'left', marginTop:10}}>
                                    <Label>{IMLocalized('label_description')}</Label>
                                    <Textarea value={this.state.description} style={styles.inputs} onChangeText={(text) => {this.setState({description: text})}}/>
                                </Item>
                            </Form>
                        </Row>
                        <Row style={{padding:16}}>
                            <Button style={styles.buttonSign} block primary onPress={()=>this._onPressButtonSave(this)}>
                                <Text> {IMLocalized('operation_save')} </Text>
                            </Button>
                        </Row>
                    </Grid>
                </Container>
            );
        }
        else {
            return (
                <View style={{marginTop:200, padding:20}}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={(event, selectedDate) => {this.setState({date: selectedDate})}} />
                        <Button onPress={()=>{this._onShowDatePicker(false)}}><Text>{IMLocalized('operation_done')}</Text></Button>
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
        marginTop:80,
        flex:1
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

