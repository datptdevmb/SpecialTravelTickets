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
const CustomInputView = props => {
  const textColor = isDarkMode ? Colors.dark.text : Colors.light.text;

  const {
    placeholder,
    keyboardType,
    onTextChange,
    value,
    hidePassword,
    backgroundColor,
  } = props;

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
    <View
      style={[
        styles.inputView,
        {backgroundColor: backgroundColor || '#F7F8F9'},
      ]}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        onChangeText={handleTextChange}
        value={text}
        secureTextEntry={hide}
        style={[styles.input, {color: textColor}]}
      />
      {hide != null && (
        <TouchableOpacity onPress={hideShowPassword}>
          {hide ? (
            <Icons.hide
              width={19}
              height={19}
              fill={'#6A707C'}
              style={styles.showPassword}
            />
          ) : (
            <Icons.show
              width={19}
              height={19}
              fill={'#6A707C'}
              style={styles.showPassword}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputView;
