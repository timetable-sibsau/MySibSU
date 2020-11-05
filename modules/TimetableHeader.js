import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { h, w } from './constants'
import { AntDesign } from '@expo/vector-icons'


const MainHeader = ({title, onPress, week}) => {
    const {container, maintext } = styles
    return(
        <View style={container}>
            {/*<Image style={{width: 45, height: 45, marginLeft: 31}} source={require('../assets/logo.jpeg')}/>*/}
            <TouchableWithoutFeedback style={{ zIndex: 4}} onPress={onPress}>
                <AntDesign name="logout" size={24} color="gray" style={{ position: 'absolute', left: 20, top: 45, transform:[{rotate: '180deg'}] }}/>
            </TouchableWithoutFeedback>
            <Text style={maintext}>{title}</Text>
            {/*<Text style={styles.week}>{week}</Text>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 80,
        width: w,
        paddingTop: 30,
        elevation: 8,
        position: 'relative',
        flexDirection: 'row',
      },
    
    maintext: {
        fontSize: 30,
        color: 'grey',
        textAlignVertical: 'bottom',
        fontFamily: 'roboto',
        alignSelf: 'center',
        position: 'absolute',
        left: w * 0.3,
        top: 35,
      },
    
    week: {
        position: 'absolute',
        right: 20,
        bottom: 8,
        fontFamily: 'roboto',
        textAlignVertical: 'bottom',
        fontSize: 17,
        color: 'gray'

    }
})

export default MainHeader