import React, { useState } from "react"; 
import { View, Text, Button, StyleSheet } from "react-native";

const ToDo = ({ addTitle }) => {

    console.log('child render');

    return (
        <View style={{borderWidth: 1}}>
            <Button title="add todo" onPress={addTitle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textLabel: {
        textAlign: 'center'
    }
});

export default ToDo;