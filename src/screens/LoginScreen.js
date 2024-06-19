import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icons from '../constants/Icons';
import stylescontainer from '../styles/screens/Containerloginre_style';
import CustomInputView from '../components/CustomInputView';
import CustomTextInput from '../components/CustomTextInput';
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
  return (
   
    <SafeAreaView style={stylescontainer.container}>
      <TouchableOpacity style={stylescontainer.containerLeftArrow}>
        <Image source={Icons.leftarrow} style={stylescontainer.iconLeftArrow} />
      </TouchableOpacity>
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
      <TouchableOpacity >
        <Text style={stylescontainer.forgottext}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default LoginScreen;
