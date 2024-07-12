import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import CustomInputView from '../../components/CustomInputView';
import CustomButton from '../../components/CustomButton';
import stylescontainer from '../../styles/screens/Containerloginre_style';
import BackButton from '../../components/BackButton';

const ResetPassWord = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylescontainer(isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" />
      <BackButton />
      <Text style={styles.speech}>Create New password</Text>
      <Text style={styles.textDont}>
        Your new password must be unique from those previously used.
      </Text>
      <View style={[styles.inputContainer,{marginTop:27}]}>
        <CustomInputView
          // onTextChange={handleEmailChange}
          // value={email}
          placeholder="New Password"
          placeholderTextColor="#8391A1"
        />
        <CustomInputView
          // onTextChange={handleEmailChange}
          // value={email}
          placeholder="Confirm Password"
          placeholderTextColor="#8391A1"
        />
      </View>
      <View style={styles.buttonContainer}>
          <CustomButton
            style={{marginStart: -22, marginTop: 35}}
            title={'Send Code'}
            // onPress={handleForgot}
          />
        </View>
    </SafeAreaView>
  );
};

export default ResetPassWord;
