import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderCustomText = ({leftText, title, rightText, styles}) => {
  return (
    <View style={styles.HeaderTextContainer}>
      <Text style={styles.leftText} />
      <Text style={styles.texttilte}>{title}</Text>
      <Text style={styles.rightText} />
    </View>
  );
};

export default HeaderCustomText;
