import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
  useColorScheme,
} from 'react-native';
import Icons from '../constants/Icons';
import CustomInputView from '../components/CustomInputView';
import BackButton from '../components/BackButton';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Color';
import CustomSocialnetwork from '../components/CustomSocialnetwork';

// Dark and Light
import stylescontainer from '../styles/screens/Containerloginre_style';

function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [usernameerror, setUsernameerror] = useState('');

  const [email, setEmail] = useState('');
  const [emailerror, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passworderror, setPasswordError] = useState('');

  const [rePassword, setRePassword] = useState('');
  const [rePassworderror, setrePasswordError] = useState('');

  const changeUsernameTitle = data => {
    setUsername(data);
    setUsernameerror('');
  };
  const changeEmailTitle = data => {
    setEmail(data);
    setEmailError('');
  };

  const changePassContent = data => {
    setPassword(data);
    setPasswordError('');
  };

  const changeRePassContent = data => {
    setRePassword(data);
    setrePasswordError('');
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
  //Dark and Light
  const isDarkMode = useColorScheme() === 'light';
  const styles = stylescontainer(isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      {/* button back */}
      <BackButton onPress={backButton} isDarkMode={isDarkMode}/>

      <Text style={styles.speech}>Welcome back! Glad to see you, Again!</Text>
      <View style={styles.inputContainer}>
        <CustomInputView
          onTextChange={changeUsernameTitle}
          value={username}
          placeholder="Username"
          keyboardType="default"
          placeholderTextColor="#8391A1"
        />
        <CustomInputView
          onTextChange={changeEmailTitle}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#8391A1"
        />
        <CustomInputView
          onTextChange={changePassContent}
          value={password}
          placeholder="Password"
          placeholderTextColor="#8391A1"
          keyboardType="default"
          hidePassword={true}
        />
        <CustomInputView
          onTextChange={changeRePassContent}
          value={rePassword}
          placeholder="RePassword"
          placeholderTextColor="#8391A1"
          keyboardType="default"
          hidePassword={true}
        />
      </View>

      <CustomButton
        style={{marginStart: -22, marginTop: 20}}
        title={'Agree and Register'}
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

export default RegisterScreen;
