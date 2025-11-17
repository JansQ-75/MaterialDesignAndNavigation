import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function Home({navigation}: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button mode='contained' onPress={() => navigation.navigate('SecondScreen')}>
        Go to SecondScreen
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})