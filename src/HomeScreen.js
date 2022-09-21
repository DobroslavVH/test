import React, { useState, useMemo, useCallback } from "react";
import {Text, View, StyleSheet, Button, TextInput} from "react-native";
import List from "./List";

const HomeScreen = () => {

    const [ number, setNum ] = useState(0);
    const [ dark, setDark ] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number])

    const themeStyles = useMemo(() => {
        console.log('useMemo => theme is change');
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        };
    }, [dark])
    
    const doubleNum = useMemo(() => {
        return SlowFunction(number);
    }, [number])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(number) => setNum(number)}
            />
            <Button title="change theme" onPress={() => setDark(prevDark => !prevDark)}/>
            <Text style={themeStyles}>{doubleNum}</Text>
            <List getItems={getItems}/>
        </View>
    );
};

function SlowFunction (num) {
    console.log('slow function execute')
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        borderWidth: 1
    }
});

export default HomeScreen;