import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Home'>
export default function Home({navigation}: Props) {
  return (
    
      <ImageBackground
        source={require('../assets/unicornyoga.png')}
        style={styles.image}
        resizeMode='contain'
      >
      <Button style={styles.button} mode='contained' onPress={() => navigation.navigate('SecondScreen')}>
        Go to SecondScreen
      </Button>
      </ImageBackground>
    
  )
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#e3bdd5ff',
  },
  button: {
    marginBottom: 90
  },
  
})