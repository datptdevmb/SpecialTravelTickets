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
      <Stack.Navigator initialRouteName='ResetPassWord' screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen}/>
        <Stack.Screen name="ResetPassWord" component={ResetPassWord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
