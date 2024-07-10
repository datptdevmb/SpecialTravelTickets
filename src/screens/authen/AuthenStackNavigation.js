import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotScreen from './ForgotScreen'
import ResetPassWord from './ResetPassWordScreen'

const Stack = createNativeStackNavigator()

const AuthenStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >   
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <Stack.Screen name='ForgotScreen' component={ForgotScreen}/>
            <Stack.Screen name='ResetPassWord' component={ResetPassWord}/>
        </Stack.Navigator>
    )
}

export default AuthenStackNavigation