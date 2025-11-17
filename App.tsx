import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SecondScreen from './screens/SecondScreen';
import MyAppbar from './components/MyAppbar';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          header: (props) => <MyAppbar {...props}/>,
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='SecondScreen' component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
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
