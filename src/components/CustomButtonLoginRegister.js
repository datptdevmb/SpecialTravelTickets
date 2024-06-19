import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';

const HeaderCustomButtonLogin = ({icon, styles}) => {
  return (
    <View style={styles.headerButtonContainerLogin}>
      <TouchableOpacity style={styles.buttonLogin}>
        <Image source={icon} style={styles.buttonIconLogin} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCustomButtonLogin;
