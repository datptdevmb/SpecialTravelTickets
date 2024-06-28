import {StyleSheet} from 'react-native';
import Colors from '../../constants/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const stylesbutton = isDarkMode =>
  StyleSheet.create({
    containerbutton: {
      width: wp('100%'), // Chiều rộng responsive
      height: 'auto', // Chiều cao tự động
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: wp('90%'), // Chiều rộng responsive
      height: hp('7%'), // Chiều cao responsive
      marginRight: '4%',
      borderRadius: wp('4%'), // Responsive border radius
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderColor: isDarkMode ? Colors.dark.white : Colors.light.white,
      borderWidth: 1,
      backgroundColor: isDarkMode ? Colors.dark.light : Colors.light.black,
    },
    textbutton: {
      color: isDarkMode ? Colors.dark.white : Colors.light.white,
      fontSize: wp('4%'), // Responsive font size
      fontWeight: '600',
      textAlign: 'center',
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
    },
  });

export default stylesbutton;
