import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Editmode, Chunk} from 'editmode-react-native'
export default function App() {
  return (
    <Editmode projectId="prj_UnC2ZXKbljfW" >

      <View style={styles.container}>
        <Chunk identifier="cnk_610ce1a4eadce8991c0c" />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Editmode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
