import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Text>Meu app ta roando!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 100
  }
});
