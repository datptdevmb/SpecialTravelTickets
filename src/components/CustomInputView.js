import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icons from '../constants/Icons';
import customStyles from '../styles/components/CustomTextInputView_style';

const CustomInputView = (props) => {
  const {
    placeholder,
    placeholderTextColor,
    keyboardType,
    onTextChange,
    value,
    hidePassword,
  } = props;

  const [text, setText] = useState(value);
  const [hide, setHide] = useState(hidePassword);

  const handleTextChange = (inputText) => {
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

  return (
    <View style={[customStyles.inputView, customStyles]}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        onChangeText={handleTextChange}
        value={text}
        secureTextEntry={hide}
        style={customStyles.input}
      />
      {hide != null && (
        <TouchableOpacity onPress={hideShowPassword}>
          <Image
            source={hide ? Icons.show : Icons.hide}
            style={customStyles.showPassword}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputView;
