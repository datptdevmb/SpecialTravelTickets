import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateVerticalScale, moderateScale } from "react-native-size-matters";

const stylesbuttonback = StyleSheet.create({
    button: {
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: '#E8ECF4', 
        backgroundColor: '#FFF', 
        width: moderateVerticalScale(41),
        height: moderateVerticalScale(41),
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default stylesbuttonback