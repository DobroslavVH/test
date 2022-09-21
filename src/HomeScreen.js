import React, { useState, useMemo, useCallback, useReducer } from "react";
import {Text, View, StyleSheet, Button, TextInput} from "react-native";
import List from "./List";

const initialState = 0;

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        default:
            return state;
    }
};

const HomeScreen = () => {

    const [ number, setNum ] = useState(0);
    const [ dark, setDark ] = useState(false);

    // count content
    const [ count, setCount ] = useState(0);
    const { state, dispatch } = useReducer( countReducer, initialState);

    const Increase = () => {
        dispatch({type: 'increase'})
    };

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
            <View style={styles.counterView}>
                <Text>{state}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button title="+" onPress={() => Increase()}/>
                    <Button title="-"/>
                </View>
            </View>
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
    },
    counterView: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
});

export default HomeScreen;