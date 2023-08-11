import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";



const Counter = () => {
    const [count, setCount] = useState(0);
    const [newcount, setNewCount] = useState(0);

    useEffect(() => {
        console.log(`Count changed`);
        return () => {
            console.log('useEffect cleanup');
        }
    }, [count])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Count: ${count}`}</Text>
            <Button color={'red'} title={'Increase'} onPress={() => setCount(count+1)}  style={styles.button} />
            <Button color={'green'} title={'Decrease'} onPress={() => setCount(count-1)}  style={styles.button} />
            <Button color={'red'} title={'Increase'} onPress={() => setNewCount(count+1)}  style={styles.button} />
            <Button color={'green'} title={'Decrease'} onPress={() => setNewCount(count-1)}  style={styles.button} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 25
    },
    button: {
        width: 100, 
        height: 50,
        marginTop: 20, 
    },
})

export default Counter;