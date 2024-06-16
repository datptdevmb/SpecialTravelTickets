import { TouchableOpacity } from "react-native";
import styles from "../styles/components/BackButton_style";
import Svg, { Path } from 'react-native-svg';


function BackButton() {

    return (
        <TouchableOpacity style={styles.button}>
            <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
               
            </Svg>
        </TouchableOpacity>
    );
}

export default BackButton