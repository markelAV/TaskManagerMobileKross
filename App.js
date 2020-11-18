import * as React from 'react';
import { Container, Header, Content, Text } from 'native-base';
import { StyleSheet, Button, View, SafeAreaView,  Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CalendarScreen from './screens/CalendarScreen'
import CreateEditTaskScreen from './screens/CreateEditTaskScreen'
import GEOScreen from './screens/GEOScreen'
import HomeScreen from './screens/HomeScreen'
import LoadScreen from './screens/LoadScreen'
import LoginScreen from './screens/LoginScreen'
import OnboadrdingScreen from './screens/OnboadrdingScreen'
import SettingsScreen from './screens/SettingsScreen'
import StartScreen from './screens/StartScreen'
import ViewTaskScreen from './screens/ViewTaskScreen'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MenuScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Calendar"
                onPress={() => navigation.navigate('Calendar')}
            />
            <Button
                title="Go to CreateEditTask"
                onPress={() => navigation.navigate('CreateEditTask')}
            />
            <Button
                title="Go to GEOScreen"
                onPress={() => navigation.navigate('GEO')}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go to LoadScreen"
                onPress={() => navigation.navigate('Load')}
            />
            <Button
                title="Go to LoginScreen"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Go to Onboadrding"
                onPress={() => navigation.navigate('Onboadrding')}
            />
            <Button
                title="Go to Start"
                onPress={() => navigation.navigate('Start')}
            />
            <Button
                title="Go to View"
                onPress={() => navigation.navigate('ViewTask')}
            />
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Calendar" screenOptions={{headerShown: false}}>
          <Drawer.Screen name="Calendar" component={CalendarScreen} />
          <Drawer.Screen name="CreateEditTask" component={CreateEditTaskScreen} />
          <Drawer.Screen name="GEO" component={GEOScreen} />
          <Drawer.Screen name="Load" component={LoadScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Onboadrding" component={OnboadrdingScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Start" component={StartScreen} />
          <Drawer.Screen name="ViewTask" component={ViewTaskScreen} />
          <Drawer.Screen name="Menu" component={MenuScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;
