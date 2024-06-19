import {StyleSheet} from 'react-native';
import Colors from '../../constants/Color';
const customStyles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    width: 330,
    marginTop: 15,
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.lightgray,
  },
  input: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    color: 'black',
  },
  showPassword: {
    width: 20,
    height: 20,
  },
});

export default customStyles;
