import {StyleSheet} from 'react-native';
import Colors from '../../constants/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const stylesnet = isDarkMode =>
  StyleSheet.create({
    btnnet: {
      borderWidth: 1,
      borderColor: isDarkMode ? Colors.dark.white : Colors.light.lightgray,
      paddingVertical: hp('3%'), // Responsive padding vertical
      width: wp('40%'), // Responsive width
      height: hp('7%'), // Responsive height
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp('4%'), // Responsive border radius
      backgroundColor: isDarkMode
        ? Colors.dark.background
        : Colors.light.background,
    },
    imagenet: {
      width: wp('8%'), // Responsive width
      height: hp('3.5%'), // Responsive height
      
    },
  });

export default stylesnet;
