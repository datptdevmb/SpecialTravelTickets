import {StyleSheet} from 'react-native';
import Colors from '../../constants/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const customStyles = isDarkMode =>
  StyleSheet.create({
    inputView: {
      borderWidth: 1,
      width: wp('90%'), // Responsive width
      marginTop: hp('2%'), // Responsive margin top
      height: hp('7.5%'), // Responsive height
      borderRadius: wp('4%'), // Responsive border radius
      paddingHorizontal: wp('4%'), // Responsive horizontal padding
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: isDarkMode ? Colors.dark.white : Colors.light.black, // Màu viền
      backgroundColor: isDarkMode
        ? Colors.dark.background
        : Colors.light.background, // Màu nền
    },
    input: {
      flex: 1, // Để TextInput có thể mở rộng đầy đủ chiều ngang
      fontSize: wp('4%'), // Responsive font size
      fontWeight: '400',
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      color: isDarkMode ? Colors.dark.text : Colors.light.text, // Màu chữ
    },
    showPassword: {
      width: wp('5%'), 
      height: wp('5%'), 
    },
  });

export default customStyles;
