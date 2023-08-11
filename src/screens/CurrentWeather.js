import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import {Feather} from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";


const CurrentWeather = ({weatherData}) => {
    const {wrapper, container, tempStyles, feels, highLow, highLowWrapper, bodyWrapper, description, message} = styles;

    const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData;

    const weatherCondition = weather[0]?.main
    return (
    <SafeAreaView style={[wrapper, {backgroundColor: WeatherType[weatherCondition]?.backgroundColor}]}>
        <View style={container}>
            <Feather name={WeatherType[weatherCondition]?.icon} size={100} color='white' />
            <Text style={tempStyles}>{temp}°c</Text>
            <Text style={feels}>{`Feels like ${feels_like}°c`}</Text>
            <RowText messageOne={`High: ${temp_max}°c  `} messageTwo={`Low: ${temp_min}°c`} containerStyles={highLowWrapper} 
            messageOneStyles={highLow} messageTwoStyles={highLow} />
        </View>
        <RowText messageOne={weather[0]?.description} messageTwo={WeatherType[weatherCondition]?.message}  
        containerStyles={bodyWrapper} 
        messageOneStyles={description} messageTwoStyles={message} />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: "center",
    
    },
    tempStyles: {
        color: 'black',
        fontSize: 56,

    },
    feels: {
        color: 'black',
        fontSize: 30,
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper:{
        flexDirection: "row"
    },
    bodyWrapper:{
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 27,
    }
})
export default CurrentWeather;