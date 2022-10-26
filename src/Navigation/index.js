import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/SignInScreen/Signin';
import SignUp from '../screens/SignUpScreen/SignUp';
import ConfirmEmail from '../screens/ConfirmEmailScreen/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPassWordScreen/ForgotPassword';
import NewPassword from '../screens/NewPassWordScreen/NewPassWord';
import Ads from '../screens/AdsScreen/Ads';
  




const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator  screenOptions={{headerShown:false}}>
              <Stack.Screen name="Signin" component={Signin} /> 
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name=" NewPassWord" component={NewPassword} />
              <Stack.Screen name=" Ads" component={Ads} />
              
              
             
          
              
              
              
              
          
              
          </Stack.Navigator>
   
    </NavigationContainer>
  )
}

export default Navigation