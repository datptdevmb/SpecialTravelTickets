import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  useColorScheme,
  TouchableOpacity
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import BackButton from '../../components/BackButton';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/ColorForgot';
import styles from '../../styles/screens/forgotStyle';

function ForgotScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.black : Colors.white;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.content}>
        <BackButton />
        <Text style={styles.textForgot}>Forgot Password?</Text>
        <Text style={styles.textDont}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            isDarkMode={isDarkMode}
            placeholder={'Enter your email'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            style={{ marginTop: 35 }}
            title={'Send Code'}
          />
        </View>
        <View style={styles.containertxtsignup}>
          <Text style={styles.textsignupdonthave}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default ForgotScreen;