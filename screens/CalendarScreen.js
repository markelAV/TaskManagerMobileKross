import _ from 'lodash';
import React, {Component} from 'react';
import {
    Platform,
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import {Container, Icon} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";


const testIDs = require('../testIDs');


const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);
const themeColor = '#408AD2';
const lightThemeColor = '#EBF9F9';

function getFutureDates(days) {
    const array = [];
    for (let index = 1; index <= days; index++) {
        const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
        const dateString = date.toISOString().split('T')[0];
        array.push(dateString);
    }
    return array;
}

function getPastDate(days) {
    return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

const ITEMS = [
    {title: dates[0], data: [{hour: '12:11', duration: '', title: 'Planning', description:'Assessing stories for the next sprint', date:dates[0]}]},
    {title: dates[1], data: [{hour: '10:00', duration: '1h', title: 'Feature testing', description:'Testing the autocomplete feature', date:dates[1]}, {hour: '11:00', duration: '1h', title: 'Sinc Up', description:'Daily discussion of task completion status', date:dates[1]}]},
    {title: dates[2], data: [{hour: '1pm', duration: '1h', title: 'Demo', description:'show demo', date:dates[2]}, {hour: '2pm', duration: '1h', title: 'Coffee break', description: '', date:dates[2]}, {hour: '3pm', duration: '1h', title: 'Private Yoga', description: '', date:dates[2]}]},
    {title: dates[3], data: [{hour: '12am', duration: '1h', title: 'Preparation of a quarterly report', description: 'Preparation of a quarterly report on the results of the current quarter', date:dates[3]}]},
    {title: dates[4], data: [{}]},
    {title: dates[5], data: [{hour: '9pm', duration: '1h', title: 'Stand Up', description: '', date:dates[5]}, {hour: '10pm', duration: '1h', title: 'Ashtanga', date:dates[5]}, {hour: '11pm', duration: '1h', title: 'TRX', date:dates[5]}, {hour: '12pm', duration: '1h', title: 'Running Group', date:dates[5]}]},
    {title: dates[6], data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga', date:dates[6]}]},
    {title: dates[7], data: [{}]},
    {title: dates[8], data: [{hour: '9pm', duration: '1h', title: 'Pilates Reformer', date:dates[8]}, {hour: '10pm', duration: '1h', title: 'Ashtanga', date:dates[8]}, {hour: '11:20', duration: '1h', title: 'TRX'}, {hour: '12:00', duration: '1h', title: 'Running Group', date:dates[8]}]},
    {title: dates[9], data: [{hour: '1pm', duration: '1h', title: 'Ashtanga Yoga', date:dates[9]}, {hour: '2pm', duration: '1h', title: 'Deep Streches', date:dates[9]}, {hour: '3pm', duration: '1h', title: 'Private Yoga', date:dates[9]}]},
    {title: dates[10], data: [{hour: '12am', duration: '1h', title: 'Last Yoga', date:dates[10]}]}
];

export default class CalendarScreen extends Component {

    constructor(props) {
        super(props);
    }

    onDateChanged = (/* date, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
        // fetch and set data for date + week ahead
    }

    onMonthChange = (/* month, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
    }

    buttonPressed() {
        Alert.alert('show more');
    }

    itemPressed(id) {
        Alert.alert(id);
    }

    renderEmptyItem() {
        return (
            <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>No Events Planned</Text>
            </View>
        );
    }

    renderItem = ({item}) => {
        if (_.isEmpty(item)) {
            return this.renderEmptyItem();
        }
        let maxlimit = 17; //Limit on size Title of task
        return (
            <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('ViewTask',{task: item})}}
                style={styles.item}
                testID={testIDs.agenda.ITEM}
            >
                <View>
                    <Text style={styles.itemHourText}>{item.hour}</Text>
                    <Text style={styles.itemDurationText}>{item.duration}</Text>
                </View>
                <Text style={styles.itemTitleText}>{ ((item.title).length > maxlimit) ?
                    (((item.title).substring(0,maxlimit-3)) + '...') :
                    item.title }</Text>
                <View style={styles.itemButtonContainer}>
                    <Button color={'grey'} title={'Edit'} onPress={() => {this.props.navigation.navigate('CreateEditTask',{task: item})}}/>
                </View>
            </TouchableOpacity>
        );
    }

    getMarkedDates = () => {
        const marked = {};
        ITEMS.forEach(item => {
            // NOTE: only mark dates with data
            if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
                marked[item.title] = {marked: true};
            } else {
                marked[item.title] = {disabled: true};
            }
        });
        return marked;
    }

    getTheme = () => {
        const disabledColor = 'grey';

        return {
            // arrows
            arrowColor: 'black',
            arrowStyle: {padding: 0},
            // month
            monthTextColor: 'black',
            textMonthFontSize: 16,
            textMonthFontFamily: 'HelveticaNeue',
            textMonthFontWeight: 'bold',
            // day names
            textSectionTitleColor: 'black',
            textDayHeaderFontSize: 12,
            textDayHeaderFontFamily: 'HelveticaNeue',
            textDayHeaderFontWeight: 'normal',
            // dates
            dayTextColor: themeColor,
            textDayFontSize: 18,
            textDayFontFamily: 'HelveticaNeue',
            textDayFontWeight: '500',
            textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
            // selected date
            selectedDayBackgroundColor: themeColor,
            selectedDayTextColor: 'white',
            // disabled date
            textDisabledColor: disabledColor,
            // dot (marked date)
            dotColor: themeColor,
            selectedDotColor: 'white',
            disabledDotColor: disabledColor,
            dotStyle: {marginTop: -2}
        };
    }

    render() {
        let date = new Date();
        return (
            <Container style={{paddingTop:35}}>
                <View style={{minHeight:60, paddingLeft:20}}>
                    <Grid>
                        <Col>
                            <Row>
                                <Text style={{fontSize:24, fontWeight: 'bold'}}>Today</Text>
                            </Row>
                            <Row>
                                <Text style={{fontSize:12}}>{date.toDateString()}</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={{marginLeft:100, paddingTop:10}}>
                                <Icon name='menu' />
                            </Row>
                        </Col>
                    </Grid>
                </View>
                <CalendarProvider
                    date={ITEMS[0].title}
                    onDateChanged={this.onDateChanged}
                    onMonthChange={this.onMonthChange}
                    showTodayButton
                    disabledOpacity={0.6}
                    // theme={{
                    //   todayButtonTextColor: themeColor
                    // }}
                    // todayBottomMargin={16}
                >
                    {this.props.weekView ?
                        <WeekCalendar
                            testID={testIDs.weekCalendar.CONTAINER}
                            firstDay={1}
                            markedDates={this.getMarkedDates()}
                        /> :
                        <ExpandableCalendar
                            testID={testIDs.expandableCalendar.CONTAINER}
                            // horizontal={false}
                            // hideArrows
                            // disablePan
                            // hideKnob
                            // initialPosition={ExpandableCalendar.positions.OPEN}
                            // calendarStyle={styles.calendar}
                            // headerStyle={styles.calendar} // for horizontal only
                            // disableWeekScroll
                            // theme={this.getTheme()}
                            disableAllTouchEventsForDisabledDays
                            firstDay={1}
                            markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
                            leftArrowImageSource={require('../img/previous.png')}
                            rightArrowImageSource={require('../img/next.png')}
                        />
                    }
                    <View style={{marginTop:30, paddingLeft:20}}>
                        <Text style={{fontSize:20}}>Tasks</Text>
                    </View>
                    <AgendaList
                        sections={ITEMS}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        // sectionStyle={styles.section}
                    />
                </CalendarProvider>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    calendar: {
        paddingLeft: 20,
        paddingRight: 20
    },
    section: {
        backgroundColor: lightThemeColor,
        color: 'grey',
        textTransform: 'capitalize'
    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row'
    },
    itemHourText: {
        color: 'black'
    },
    itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
    },
    itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16
    },
    itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    emptyItemText: {
        color: 'lightgrey',
        fontSize: 14
    }
});
