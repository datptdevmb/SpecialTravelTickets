import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StyleRegister = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
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
    color: '#000000',
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
    backgroundColor: '#F0F0F0',
    color: '#000000',
    borderRadius: 10,
    paddingLeft: wp('4%'),
    borderColor: '#CCCCCC',
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
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
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
    color: '#000000',
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
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
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
export default StyleRegister;
