import React, {useState, useEffect} from "react";
import { Text, FlatList, View } from "react-native";

const List = ({getItems}) => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log('useefect in list screen', items);
    }, [getItems])

    return (
        <View>
            <Text>list screen</Text>
            <FlatList
                data={items}
                keyExtractor={item => item.number}
                renderItem={({item}) => {
                    return <Text>{item}</Text>
                }}
            />
        </View>
    ); 
    
    //items.map(item => <Text key={item}>listscreen: {item}</Text>)
};

export default List;