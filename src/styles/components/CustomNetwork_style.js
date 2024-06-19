import { StyleSheet } from "react-native";
import Colors from "../../constants/Color";

const stylesnet = StyleSheet.create({
  btnnet: {
    borderWidth: 1,
    borderColor: Colors.lightgray,
    paddingVertical: 15,
    width: 105,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 8,
  },
  imagenet: {
    width: 26,
    height: 26,
    flexShrink: 0,
  },
});

export default stylesnet;
