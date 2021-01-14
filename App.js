// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Album from './src/components/albums/Album'
import Header from "./src/components/header/Header"
// import Test from './src/components/Test'

export default function App() {
  return (
    <View style={styles.container}>
      < Header  headertext={'Albums'}/>
      < Album />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
});
