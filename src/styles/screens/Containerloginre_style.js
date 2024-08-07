import {StyleSheet} from 'react-native';
import Colors from '../../constants/Color';
import Color from '../../constants/ColorForgot';

const stylescontainer = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      paddingHorizontal: 20,
      flexDirection: 'column',
      backgroundColor: isDarkMode
        ? Colors.dark.background
        : Colors.light.background,
    },
    containerLeftArrow: {
      marginStart: 14,
      width: 41,
      height: 41,
      flexShrink: 0,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: isDarkMode ? Colors.dark.boder : Colors.light.boder,
      backgroundColor: isDarkMode
        ? Colors.dark.background
        : Colors.light.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconLeftArrow: {
      width: 19,
      height: 19,
      flexShrink: 0,
      backgroundColor: isDarkMode
        ? Colors.dark.background
        : Colors.light.background,
    },
    speech: {
      width: 292,
      color: isDarkMode ? Colors.dark.text : Colors.light.text,
      fontSize: 30,
      fontWeight: '700',
      marginTop: 20,
      marginBottom: 20,
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      lineHeight: 39,
      letterSpacing: -0.3,
    },
    textDont: {
      fontSize: 16,
      color: 'gray',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 24,
      fontFamily: 'Urbanist',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      paddingHorizontal: 0,
      marginTop: 30,
    },
    forgottext: {
      color: isDarkMode ? Colors.dark.text : Colors.light.text,
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'right',
      marginTop: 5,
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
    },
    ortherContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    ortherLine: {
      backgroundColor: isDarkMode ? Colors.dark.text : Colors.light.text,
      margin: 5,
      flexGrow: 1,
      height: 1,
    },
    ortherText: {
      color: isDarkMode ? Colors.dark.text : Colors.light.text,
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      lineHeight: 39,
    },
    containerbtnnetwork: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    containertxtsignup: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    textsignupdonthave: {
      color: Color.midnightgray,
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      lineHeight: 21,
      letterSpacing: 0.15,
    },
    signupText: {
      color: Color.turquoise,
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      lineHeight: 21,
      letterSpacing: 0.15,
      marginStart: 5,
    },
    textsignupdonthave: {
      color: Color.midnightgray,
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      lineHeight: 21,
      letterSpacing: 0.15,
    },
    signupText: {
      color: Color.turquoise,
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      lineHeight: 21,
      letterSpacing: 0.15,
      marginStart: 5,
    },
  });

export default stylescontainer;
