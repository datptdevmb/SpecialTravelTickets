
import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateVerticalScale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
    inputStyle: {
        borderRadius: moderateScale(8),
        height:moderateVerticalScale(56),
        borderColor:"#DADADA",
        backgroundColor:"#F7F8F9"

    },
    innerLineStyle: {
        paddingVertical:moderateVerticalScale(19),
        borderRadius: moderateScale(8),
        paddingStart: moderateVerticalScale(18),
        borderWidth: 1
    },
})


export default styles;
