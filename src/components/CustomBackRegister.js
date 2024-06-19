import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';

const HeaderCustomBack = ({leftIcon, title, rightIcon, styles}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {!!leftIcon && <Image source={leftIcon} style={styles.back} />}
        <Text style={{flex: 1, textAlign: 'center'}}>{title}</Text>
        {!!rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
      </View>
    );
  };

export default HeaderCustomBack

