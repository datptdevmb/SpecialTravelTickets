import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ToastAndroid,
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import CustomInputView from '../../components/CustomInputView';
import BackButton from '../../components/BackButton';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/ColorForgot';
import stylescontainer from '../../styles/screens/Containerloginre_style';

function ForgotScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylescontainer(isDarkMode);
  const backgroundColor = isDarkMode ? Colors.black : Colors.white;

  const [email, setEmail] = useState('');

  const handleEmailChange = data => {
    setEmail(data);
    setEmailError('');
  };
  const handleForgot = async () => {
    ToastAndroid.show('Forgot successful!', ToastAndroid.SHORT);
  };


  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View>
        <BackButton />
        <Text style={styles.speech}>Forgot Password?</Text>
        <Text style={styles.textDont}>
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
        <View style={styles.inputContainer}>
          <CustomInputView
            onTextChange={handleEmailChange}
            value={email}
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor="#8391A1"
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            style={{marginStart: -22, marginTop: 35}}
            title={'Send Code'}
            onPress={handleForgot}
          />
        </View>
      </View>
      <View style={[styles.containertxtsignup,{marginTop:237}]}>
        <Text style={styles.textsignupdonthave}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ForgotScreen;
