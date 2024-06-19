import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Icons from '../constants/Icons';
import stylescontainer from '../styles/screens/Containerloginre_style';
import CustomInputView from '../components/CustomInputView';
import BackButton from '../components/BackButton';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Color';
import CustomSocialnetwork from '../components/CustomSocialnetwork';
function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [emailerror, setEmailError] = useState('');

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
    <SafeAreaView style={stylescontainer.container}>
      {/* button back */}
      <BackButton onPress={backButton} />

      <Text style={stylescontainer.speech}>
        Welcome back! Glad to see you, Again!
      </Text>
      <View style={stylescontainer.inputContainer}>
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
        <Text style={stylescontainer.forgottext}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomButton
        style={{paddingHorizontal: 22, marginTop: 45}}
        title={'Login'}
        onPress={handleLogin}
      />
      <View style={stylescontainer.ortherContainer}>
        <View style={stylescontainer.ortherLine} />
        <Text style={stylescontainer.ortherText}>Or Login with</Text>
        <View style={stylescontainer.ortherLine} />
      </View>
      <View style={stylescontainer.containerbtnnetwork}>
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
      <View style={stylescontainer.containertxtsignup}> 
        <Text style={stylescontainer.textsignupdonthave}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={stylescontainer.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
