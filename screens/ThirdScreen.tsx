import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>ThirdScreen</Text>
        <Image
        source={require('../assets/unicorn.png')}
        style={styles.image}
        />
        <Text style={{fontSize: 20, marginBottom: 50, fontStyle: 'italic'}}>90% sparkle, 10% inflatable support</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3bdd5ff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }
})