import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Axios from 'axios'
import AlbumDetal from './AlbumDetal'


export default class Album extends Component {
    state = {
        albums: []
    }
    componentWillMount() {
        // Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response=>console.log(response))
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({ albums: response.data }))
    }
    renderData() {
        return this.state.albums.map(albums =>
        <AlbumDetal  key={albums.title} value={albums}/>
            
            )
        }
        render() {
            console.log(this.state, "hello");
        return (
            <ScrollView >


                {this.renderData()}



            </ScrollView>
        )
    }
}


// const styles = StyleSheet.create({
//     Text: {
//         flex:1,
//         borderWidth: 1,
//         position:"relative",
//         flexDirection:'row',
//         // borderColor: 'black',
//         padding: 10,
//         // backgroundColor: 'gray',

//     }
// })