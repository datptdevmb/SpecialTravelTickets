import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import stylesbutton from '../styles/components/CustomButton_style';

const CustomButton = ({style, title, onPress}) => {
  const [pressnd, setpressnd] = useState(false);
  const handlePress = () => {
    setpressnd(true);
    onPress();
  };
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylesbutton(isDarkMode);
  return (
    <View style={styles.containerbutton}>
      <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
        <Text style={styles.textbutton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
