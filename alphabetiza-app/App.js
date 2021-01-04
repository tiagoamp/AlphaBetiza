import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/View/Menu';
import Sorteador from './src/View/Sorteador';


const Stack = createStackNavigator();

const App = () => {

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Menu" 
        screenOptions={{
          headerStyle: { backgroundColor: '#836FFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: "center"
        }}>

        <Stack.Screen name="Menu" component={Menu} options={{title:'AlphaBetiza'}} />
        <Stack.Screen name="Sorteador" component={Sorteador} options={{title:'Sorteador'}} />
      
      </Stack.Navigator>

    </NavigationContainer>
    
  );
  
};

export default App;
