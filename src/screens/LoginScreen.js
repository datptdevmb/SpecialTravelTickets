import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useColorScheme} from 'react-native';
import Icons from '../constants/Icons';
import stylescontainer from '../styles/screens/Containerloginre_style';
import CustomInputView from '../components/CustomInputView';
import CustomButton from '../components/CustomButton';
import CustomSocialnetwork from '../components/CustomSocialnetwork';

function LoginScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylescontainer(isDarkMode);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const changeEmailTitle = data => {
    setEmail(data);
    setEmailError('');
  };

  const changePasswContent = data => {
    setPassword(data);
    setPasswordError('');
  };
  // sử lí chức năng đăng kí
  const handleLogin = async () => {
    ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
  };
  // sử lí chức năng quay lại
  const backButton = async () => {
    ToastAndroid.show(' Successful!', ToastAndroid.SHORT);
  };
  const handleLoginFb = async () => {
    ToastAndroid.show(' Successful!', ToastAndroid.SHORT);
  };
  const handleLoginGg = async () => {
    ToastAndroid.show(' Successful!', ToastAndroid.SHORT);
  };
  const handleLoginApple = async () => {
    ToastAndroid.show(' Successful!', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.containerLeftArrow}>
        <Image source={Icons.leftarrow} style={styles.iconLeftArrow} />
      </TouchableOpacity>
      <Text style={styles.speech}>Welcome back! Glad to see you, Again!</Text>
      <View style={styles.inputContainer}>
        <CustomInputView
          onTextChange={changeEmailTitle}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor="#8391A1"
        />
        <CustomInputView
          onTextChange={changePasswContent}
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
        style={{marginStart: -22, marginTop: 35}}
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
          style={{marginStart: 8}}
          image={Icons.icongg}
          onPress={handleLoginGg}
        />
        <CustomSocialnetwork
          style={{marginStart: 8}}
          image={Icons.icapple}
          onPress={handleLoginApple}
        />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
