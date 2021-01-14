import React from 'react'
import { View, Text } from 'react-native'

export default function Cardcontainer(props) {
    return (
        <View style={{borderWidth:1,marginTop:10,marginLeft:5,marginRight:5}}>
            <Text>{props.children}</Text>
        </View>
    )
}
