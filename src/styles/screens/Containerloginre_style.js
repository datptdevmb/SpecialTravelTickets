import { StyleSheet } from "react-native";
import Colors from "../../constants/Color";

const stylescontainer = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        flexDirection: 'column',
      },
      containerLeftArrow: {
        marginStart:14,
        width: 41, 
        height:41,
        flexShrink: 0,
        borderRadius: 12,
        borderColor: Colors.lightgrayishblue,
        borderWidth: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconLeftArrow: {
        width: 19,
        height: 19,
        flexShrink: 0,
      },
      speech: {
        width: 280,
        color: Colors.black,
        fontSize: 30,
        fontWeight: '700', 
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Urbanist', 
        fontStyle: 'normal',
        lineHeight: 39, 
        letterSpacing: -0.3,
      },
      inputContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        paddingHorizontal: 30,
        marginTop: 57,
      }
})


export default stylescontainer