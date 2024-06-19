import { StyleSheet } from "react-native";
import Colors from "../../constants/Color";


const stylesbutton = StyleSheet.create({
    containerbutton:{
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 330,
        height: 56,
        borderRadius: 8,
        paddingHorizontal: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        backgroundColor: Colors.black
    },
    textbutton:{
        color: Colors.white,
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'Urbanist', 
        fontStyle: 'normal',
        fontStyle: 'normal',
    }
});

export default stylesbutton