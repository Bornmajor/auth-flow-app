import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthFlow } from '../../App';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();


const StackNav = () => {
    const {isSignin,setIsSignIn} = useContext(AuthFlow);
  return (
    <NavigationContainer>
      <Stack.Navigator >
         {isSignin == true ? (
          <Stack.Screen
         name='Home'
         component={HomeScreen}
         options={{ 
            title:' Home',
            headerTintColor:'white',
            headerStyle:{backgroundColor:'red'}
        }}
        />  
         ):
         <Stack.Screen 
        name='Login'
        component={LoginScreen}
        options={{ 
            title:'Sign In',
            headerTintColor:'white',
            headerStyle:{backgroundColor:'red'}
        }}
        />
         }
        
      

    </Stack.Navigator> 
    </NavigationContainer>
 
  )
}

export default StackNav

const styles = StyleSheet.create({})