import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/Signin';
import SignUp from '../screens/SignUp';
import ConfirmEmail from '../screens/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassWord from '../screens/NewPassWord';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator  screenOptions={{headerShown:false}}>
              <Stack.Screen name="Signin" component={Signin} /> 
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name=" NewPassWord" component={NewPassWord} />
              <Stack.Screen name=" HomeScreen" component={HomeScreen} />
              
          
              
          </Stack.Navigator>
   
    </NavigationContainer>
  )
}

export default Navigation