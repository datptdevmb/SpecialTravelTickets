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
import Color from '../../constants/ColorForgot';
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        marginLeft: 10,

    },
    inputContainer: {
        marginTop: 40,
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    textForgot: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 20,
        paddingTop: 30



    },
    containertxtsignup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 340,
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
    textDont: {
        paddingHorizontal: 20,
        fontSize: 16,
        color: 'gray',
        paddingTop: 10,
        paddingBottom: 20,
    }
});
export default styles;  