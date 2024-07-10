import { SafeAreaView, StatusBar, StyleSheet, Text, View, useColorScheme } from "react-native"
import CustomTextInput from "../../components/CustomTextInput"
import { moderateVerticalScale, scale, verticalScale } from "react-native-size-matters"
import BackButton from "../../components/BackButton"


const ResetPassWord = () => {
    const isDarkMode = useColorScheme() === "dark"

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" />
            <BackButton buttonStyle={{ marginTop: moderateVerticalScale(33), marginStart: moderateVerticalScale(16) }} />
            <Text style={styles.textCnPassw}>Create New password</Text>
            <Text style={styles.uniquePasswordText}>Your new password must be unique from those previously used.</Text>
            <View>
                <CustomTextInput
                    inputStyle={{ marginBottom: moderateVerticalScale(15) }}
                    placeholder="New Password" />
                <CustomTextInput
                    placeholder="Comfirm Password" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateVerticalScale(20)
    },
    textCnPassw: {
        marginTop: 26,
        color: "#1E232C",
        fontSize: scale(30),
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: scale(39)
    },
    uniquePasswordText: {
        marginTop:verticalScale(10),
        marginBottom:verticalScale(57),
        color: "#8391A1",
        fontSize: scale(16),
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: scale(24)
    }

})

export default ResetPassWord