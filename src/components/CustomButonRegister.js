import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';
import Icons from '../constants/Icons';
import styles from '../constants/StyleRegister';

//HeaderCustomButton
const HeaderCustomButton = ({title, styles}) => {
  return (
    <View style={styles.headerButtonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCustomButton;
