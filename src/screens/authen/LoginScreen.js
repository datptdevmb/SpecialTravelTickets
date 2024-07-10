import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  useColorScheme
} from 'react-native';
import Icons from '../../constants/Icons';
import stylescontainer from '../../styles/screens/Containerloginre_style';
import CustomInputView from '../../components/CustomInputView';
import CustomButton from '../../components/CustomButton';
import CustomSocialnetwork from '../../components/CustomSocialnetwork';
import BackButton from '../../components/BackButton';

function LoginScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylescontainer(isDarkMode);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (data) => {
    setEmail(data);
    setEmailError('');
  };

  const handlePasswordChange = (data) => {
    setPassword(data);
    setPasswordError('');
  };

  // Handle login functionality
  const handleLogin = async () => {
    ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
  };

  // Handle back button functionality
  const handleBackButton = async () => {
    ToastAndroid.show('Back successful!', ToastAndroid.SHORT);
  };

  const handleLoginFb = async () => {
    ToastAndroid.show('Login with Facebook successful!', ToastAndroid.SHORT);
  };

  const handleLoginGg = async () => {
    ToastAndroid.show('Login with Google successful!', ToastAndroid.SHORT);
  };

  const handleLoginApple = async () => {
    ToastAndroid.show('Login with Apple successful!', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={handleBackButton} isDarkMode={isDarkMode} />
      <Text style={styles.speech}>Welcome back! Glad to see you, Again!</Text>
      <View style={styles.inputContainer}>
        <CustomInputView
          onTextChange={handleEmailChange}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor="#8391A1"
        />
        <CustomInputView
          onTextChange={handlePasswordChange}
          value={password}
          placeholder="Password"
          placeholderTextColor="#8391A1"
          keyboardType="default"
          hidePassword={true}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgottext}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomButton
        style={{ marginStart: -22, marginTop: 35 }}
        title={'Login'}
        onPress={handleLogin}
      />
      <View style={styles.ortherContainer}>
        <View style={styles.ortherLine} />
        <Text style={styles.ortherText}>Or Login with</Text>
        <View style={styles.ortherLine} />
      </View>
      <View style={styles.containerbtnnetwork}>
        <CustomSocialnetwork image={Icons.iconfb} onPress={handleLoginFb} />
        <CustomSocialnetwork
          style={{ marginStart: 8 }}
          image={Icons.icongg}
          onPress={handleLoginGg}
        />
        <CustomSocialnetwork
          style={{ marginStart: 8 }}
          image={Icons.icapple}
          onPress={handleLoginApple}
        />
      </View>
      <View style={styles.containertxtsignup}> 
        <Text style={styles.textsignupdonthave}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
