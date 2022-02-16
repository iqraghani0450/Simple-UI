import {Text, View, StyleSheet,TouchableOpacity } from "react-native";
import React, { version } from 'react';

export default function Example(props){
    const onPress = () => {console.log("hello")};
    return(
        <View style={styles.box}>
            <View style={styles.innerBox}>
                <Text> {props.text} </Text>
                <TouchableOpacity style={styles.button} onPress = {() => onPress()}>
                    <Text>Press Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    box: {
        backgroundColor: 'grey',
        height: "33.33%",
        width: "100%",
        alignItems: 'center',
    },
    
    innerBox: {
        backgroundColor: 'pink',
        height: "50%",
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
    },

    button: {
        alignContent: 'center',
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
    }
})