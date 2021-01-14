import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Card(props) {
    return (
        <View style={{flexDirection:"row",borderWidth:1,padding:5}}>
            <Text >{props.children}</Text>
        </View>
    )
}
// const styles = StyleSheet.create({
//     container: {
//         // width:"100%",
//         flexDirection:"row",
//         // flex:1,
//         backgroundColor:"gray",
//         flex:1,
//         borderWidth:2,
//         borderRadius:5,
//         borderColor:"#ddd",
//         shadowColor:"#000",
//         shadowRadius:5,
//         shadowOpacity:4,
//         elevation:2,
//         shadowOffset:{height:10, width:5},
//         height:"auto",
//          marginTop:10,
//          marginLeft:5,
//          marginRight:5,
//          padding:5,
//     },
// })