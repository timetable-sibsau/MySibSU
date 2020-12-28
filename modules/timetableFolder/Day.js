import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { h, w } from '../constants'
import Subject from './Subject'

const weekday = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const month = ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'нояб.', 'дек.']
const Day = ({day, date, week, currentWeek, weekDay}) => {
        date = date.getDate() + ' ' + month[date.getMonth()]

        return(
            <View style={styles.container}>
                <View style={styles.dayname}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>{weekday[Number(day.day)]}</Text>
                        {week === currentWeek && weekDay ===  weekday[Number(day.day)] ?
                                <View style={{ minHeight: h * 0.05, justifyContent: 'center', marginTop: h * 0.013, maxHeight: h * 0.05, borderRadius: 14, backgroundColor: '#FF7575', opacity: 0.9, paddingLeft: 8, paddingRight: 8, shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                shadowOpacity: 0.27,
                                shadowRadius: 4.65,
                                elevation: 10}}>
                                <Text style={{ fontSize: 18, color: 'white', fontFamily: 'roboto'}}>cегодня</Text></View> : null
                            }
                    </View>
                    <Text style={{minHeight: h * 0.05, fontFamily: 'roboto', textAlignVertical: 'center', marginTop: h * 0.015, maxHeight: h * 0.05, fontSize: 15, color: 'gray', position: 'absolute', right: 20}}>{date}</Text>
                </View>
                {
                    day.lessons.length === 0 ?
                    <Subject data={'Нет пар'}/> : null
                }
                {day.lessons.map(item => {
                    let index = day.lessons.indexOf(item)
                    return(<Subject data={item} key={index}/>)
                })}
            </View>
        )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginBottom: 60,
        alignSelf: 'center',
    },

    dayname: {
        width: w * 0.9,
        minHeight: h * 0.06,
        maxHeight: h * 0.06,
        flexDirection: 'row',
    },

    title: {
        marginRight: 5,
        marginTop: 10,
        paddingLeft: 7,
        textAlign: 'left',
        textAlignVertical: 'center',
        color: '#5575A7', 
        fontFamily: 'roboto',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },

    subjects: {
        color: 'transparent',
        width: w * 0.9,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        paddingBottom: 10
    }
})

export default Day