import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  useColorScheme,
} from 'react-native';
import Icons from '../constants/Icons';
import customStyles from '../styles/components/CustomTextInputView_style';
import Colors from '../constants/Color'; // Import Colors

const CustomInputView = props => {
  const {placeholder, keyboardType, onTextChange, value, hidePassword} = props;

  const [text, setText] = useState(value);
  const [hide, setHide] = useState(hidePassword);

  const handleTextChange = inputText => {
    setText(inputText);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  const hideShowPassword = () => {
    setHide(!hide);
  };

  useEffect(() => {
    if (hidePassword !== undefined && hidePassword !== null) {
      setHide(hidePassword);
    }
  }, [hidePassword]);

  const isDarkMode = useColorScheme() === 'dark';
  const styles = customStyles(isDarkMode);

  return (
    <View style={[styles.inputView]}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        onChangeText={handleTextChange}
        value={text}
        secureTextEntry={hide}
        style={styles.input}
      />
      {hide != null && (
        <TouchableOpacity onPress={hideShowPassword}>
          <Image
            source={hide ? Icons.show : Icons.hide}
            style={styles.showPassword}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputView;
