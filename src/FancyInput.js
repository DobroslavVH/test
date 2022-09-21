import React, {useImperativeHandle} from "react";
import { TextInput } from "react-native";

function FancyInput({style, ...props}, ref) {

    useImperativeHandle(ref, () => {
        return {alertHi: () => alert('sey hi')}
    })

    
    return (
        <TextInput
            ref={ref}
            {...props}
            style={{
                borderWidth: 1,
                backgroundColor: 'pink',
                padding: 5,
                ...style
            }}
        />
    );
}

export default React.forwardRef(FancyInput);