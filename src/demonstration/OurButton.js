import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";


const OurButton = () => {
    return (
        <View style={styles.main}>
        <TouchableOpacity  onPress={() => alert('Jordan Lopez Onye Ego The First!!!')} style={styles.container}>
            <Text style={styles.buttonText}>Just Tap!</Text>
        </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        elevation: 8,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
    }
})
export default OurButton;