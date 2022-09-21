import React from "react";
import { Button, View } from "react-native";

export const FancyButton = React.forwardRef((props, ref) => {

    return (
        <View>
            <Button title={props.title} ref={ref}>
                {props.children}
            </Button>
        </View>
    );
});