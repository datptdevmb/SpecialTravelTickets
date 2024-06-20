import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from '../styles/components/CustomTextInput_style';
import Colors from '../constants/ColorForgot';

const CustomTextInput = ({
  placeholder = '',
  onChangeText,
  inputStyle = {},
  ...props
}) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholderTextColor}
        onChangeText={onChangeText}
        style={styles.innerLineStyle}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;
