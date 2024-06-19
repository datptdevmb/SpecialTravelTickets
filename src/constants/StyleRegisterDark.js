import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StyleRegisterDark = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0d0d0d',
  },
  back: {
    width: wp('10%'),
    height: hp('5%'),
    marginLeft: wp('8%'),
    marginTop: hp('2%'),
  },
  text: {
    fontWeight: 'bold',
    fontSize: hp('4%'),
    color: '#FFFFFF',
    textAlign: 'auto',
    marginTop: hp('2%'),
    marginLeft: wp('8%'),
    width: wp('70%'),
    height: hp('10%'),
  },
  headerTextInputContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  textInput: {
    width: wp('80%'),
    height: hp('7%'),
    backgroundColor: '#2C323B',
    color: '#FFFFFF',
    borderRadius: 10,
    paddingLeft: wp('4%'),
    borderColor: '#555555',
    borderWidth: 1,
    fontSize: hp('1.5%'),
  },
  headerButtonContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  button: {
    width: wp('80%'),
    height: hp('7%'),
    backgroundColor: '#2C323B',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: hp('1.8%'),
    lineHeight: hp('3%'),
  },
  leftText: {
    width: wp('30%'),
    height: hp('0.2%'),
    marginLeft: wp('5%'),
    backgroundColor: '#9fa2a7',
  },
  texttilte: {
    color: '#ffffff',
    flex: 1,
    marginLeft: wp('5%'),
    fontSize: hp('1.5%'),
  },
  rightText: {
    width: wp('30%'),
    height: hp('0.2%'),
    marginRight: wp('5%'),
    backgroundColor: '#9fa2a7',
  },
  headerButtonContainerLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  buttonLogin: {
    width: wp('28%'),
    height: hp('7%'),
    backgroundColor: '#2C323B',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('3%'),
  },
  buttonIconLogin: {
    width: wp('7%'),
    height: hp('3%'),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  HeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default StyleRegisterDark;
