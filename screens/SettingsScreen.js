import React, { Component } from 'react';
import {Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Title} from 'native-base';


export default class SettingsScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Settings</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="airplane" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="text" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Language</Text>
                        </Body>
                        <Right>
                            <Text>En</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}
