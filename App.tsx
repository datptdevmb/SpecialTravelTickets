// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import ForgotScreen from './src/screens/ForgotScreen';
// import ResetPassWord from './src/screens/ResetPassWordScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// const Stack = createStackNavigator();

// function App(): React.JSX.Element {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='ResetPassWord' screenOptions={{headerShown: false}}>
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//         <Stack.Screen name="ForgotScreen" component={ForgotScreen}/>
//         <Stack.Screen name="ResetPassWord" component={ResetPassWord} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native';
import AppNavigation from './src/AppNavigation';
import { AppProvider } from './src/screens/AppContext';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});