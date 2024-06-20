import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import Colors from '../constants/ColorForgot';
import BackButton from '../components/BackButton';

function ForgotScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.black : Colors.white;

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.content}>
        <BackButton />
        <CustomTextInput
          isDarkMode={isDarkMode}
          placeholder={'Enter your phone number'}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default ForgotScreen;
