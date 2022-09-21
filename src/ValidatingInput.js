import React, {useState} from "react";
import { TextInput, StyleSheet } from "react-native";

export default function ValidatingInput (props) {
    const [ value, setValue ] = useState('');

    let validate = () => {
        let errors = [];
        if (value == '') {
            errors.push('must enter some value');
        }
        return errors;
    };

    props.childRef.current = {
        validate: validate
    };

    return (
        <TextInput 
            style={styles.input}
            placeholder={props.placeholder}
            value={value}
            onChangeText={(text) => setValue(text)}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        alignSelf: 'stretch',
        padding: 5,
        margin: 5,
        borderWidth: 1
    }
});