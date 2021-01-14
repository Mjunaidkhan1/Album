import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {


    const { container, text } = styles

    return (

        <View style={container}>
            <Text style={text}>
                {props.headertext}
            </Text>
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    container: {
        // marginTop: 25,
        alignItems: "center",
        padding: 20,
        // borderRadius: 20,
        // backgroundColor: "gray",
        shadowOffset:{height:5, width:50},
        elevation: 4,
        shadowOpacity: 0.4,

    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    }

})

