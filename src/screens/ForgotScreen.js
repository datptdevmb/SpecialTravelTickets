import { SafeAreaView, StatusBar, View, useColorScheme } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import styles from "../styles/components/CustomTextInput_style";
import Colors from "../constants/Color";
import BackButton from "../components/BackButton";

function ForgotScreen() {

    const isDarkMode = useColorScheme() === "dark"

    return (
        <SafeAreaView
            style={[styles.container, isDarkMode ? Colors.black : Colors.white]}>
            <StatusBar
                backgroundColor="transparent"
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <BackButton/>
            <CustomTextInput

                isDarkMode={isDarkMode}
                placeholder={"Enter your phone number"} />
        </SafeAreaView>
    )
}
export default ForgotScreen