import React from 'react'
import { View,Image, Text,ScrollView,StyleSheet } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import Card from '../cards/Card'
import Cardcontainer from '../cards/Cardcontainer'
const AlbumDetal = (props) => {
    const {title , artist, thumbnail_image,image} = props.value
    return (

    
        <View style={{borderWidth:1,borderColor:"gray",width:"100%",flex:1,marginTop:10,marginLeft:5,marginRight:5}}>


                     <View style={{ flexDirection:"row",borderWidth:1,padding:5}}>
                    



            <View >

            
                <Image style={{width:70,height:70}} source ={{uri:thumbnail_image}} />
           
            </View>

        <View style={{marginLeft:5}} >
            <Text style={{fontSize:25}}> {title} </Text>
            <Text style={{fontSize:20}} >{artist} </Text>

        </View>
     </View>
    
                <Image style={{width:"100%",height:320,marginLeft:10,marginRight:10,marginTop:10,alignSelf:"center"}} source ={{uri:image}} />
    </View>
        
        )
    }

export default AlbumDetal
// const styles = StyleSheet.create({
//     container: {
//         width:'100%',
//         shadowColor:"gray",
//         shadowOpacity:4,
//         elevation:0.8,
//         height:"auto",
//          marginTop:10 ,
//          marginRight:5,
//          marginLeft:5 ,
//          position:'relative'
//     },
//     title:{
//         fontStyle:"italic",
//         fontSize:20
//     }
// })