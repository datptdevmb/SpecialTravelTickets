import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';

const HeaderCustomTextInput = ({title, styles}) => {
  return (
    <View style={styles.headerTextInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={title}
        placeholderTextColor="#8391A1"
      />
    </View>
  );
};

export default HeaderCustomTextInput;
