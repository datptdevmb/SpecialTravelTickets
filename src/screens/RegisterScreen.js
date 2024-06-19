import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';

//responseve
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import HeaderCustomButton from '../components/CustomButonRegister';
import HeaderCustomBack from '../components/CustomBackRegister';
import HeaderCustomTextInput from '../components/CustomTextInputRegister';
import HeaderCustomButtonLogin from '../components/CustomButtonLoginRegister';
import HeaderCustomText from '../components/CustomTextRegister';

import styles from '../constants/StyleRegister';
import StyleRegisterDark from '../constants/StyleRegisterDark';

const Register = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const appliedStyles = isDarkMode ? StyleRegisterDark : styles;

  return (
    <View style={appliedStyles.container}>
      <HeaderCustomBack
        leftIcon={require('../assets/Image/back.png')}
        styles={appliedStyles}
      />
      <View>
        <Text style={appliedStyles.text}>
          Welcome back! Glad to see you, Again!
        </Text>
        <Text></Text>
      </View>
      <HeaderCustomTextInput title="Username" styles={appliedStyles} />
      <HeaderCustomTextInput title="Email" styles={appliedStyles} />
      <HeaderCustomTextInput title="Password" styles={appliedStyles} />
      <HeaderCustomTextInput title="Confirm password" styles={appliedStyles} />
      <HeaderCustomButton title="Agree and Register" styles={appliedStyles} />
      <HeaderCustomText title="Or Login with" styles={appliedStyles} />
      <View style={appliedStyles.buttonsContainer}>
        <HeaderCustomButtonLogin
          icon={require('../assets/Image/face.png')}
          styles={appliedStyles}
        />
        <HeaderCustomButtonLogin
          icon={require('../assets/Image/google.png')}
          styles={appliedStyles}
        />
        <HeaderCustomButtonLogin
          icon={require('../assets/Image/apple.png')}
          styles={appliedStyles}
        />
      </View>
    </View>
  );
};

export default Register;
