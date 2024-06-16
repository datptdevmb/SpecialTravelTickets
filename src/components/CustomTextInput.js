import { TextInput } from "react-native";
import styles from "../styles/components/CustomTextInput_style";
import Colors from "../constants/Color";

function CustomTextInput({ placeholder, isDarkMode }) {
    return (
        <TextInput
            style={[
                styles.containerTextIp,
                {
                    borderColor: isDarkMode ? 'red' : 'red',
                    color: isDarkMode? Colors.black : Colors.white,
                },
            ]}
            placeholder={placeholder}
        >
        </TextInput>
    )
}

export default CustomTextInput