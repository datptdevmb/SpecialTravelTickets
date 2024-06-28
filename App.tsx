import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ForgotScreen from './src/screens/ForgotScreen';
import ResetPassWord from './src/screens/ResetPassWordScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{ headerShown: false}}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: 'Register' }}/>
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} options={{ headerTitle: 'Forgot Password' }}/>
        <Stack.Screen name="ResetPassWord" component={ResetPassWord} options={{ headerTitle: 'Reset Password' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
