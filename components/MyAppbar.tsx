import { Appbar, Menu } from 'react-native-paper'
import React from 'react'
import { getHeaderTitle } from '@react-navigation/elements';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View } from 'react-native'

export default function MyAppbar({navigation, route, options, back}: NativeStackHeaderProps) {
    const [visible, setVisible] = React.useState(false)
    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)
    const title = getHeaderTitle(options, route.name)
  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
        <Appbar.Content title={title}/>
        {!back ? (
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <View>
                    <Appbar.Action icon="dots-vertical" onPress={openMenu}/>
                    </View>
                }>
            <Menu.Item
                onPress={()=>{
                    closeMenu()
                    navigation.navigate('Home')
                }} 
                title='Homepage' disabled
            />
            <Menu.Item
                onPress={()=> {
                    closeMenu()
                    navigation.navigate('SecondScreen')
                }} 
                title='Go to SecondScreen'
            />
            <Menu.Item
                onPress={()=>{
                    closeMenu()
                    navigation.navigate('ThirdScreen')
                }} 
                title='Go to ThirdScreen'
            />
            </Menu>
        ) : null}
    </Appbar.Header>
  )
}