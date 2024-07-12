import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import stylesnet from '../styles/components/CustomNetwork_style';

const CustomSocialnetwork = ({IconComponent, onPress, style}) => {
  const [pressnd, setpressnd] = useState(false);
  const handlePress = () => {
    setpressnd(true);
    onPress();
  };
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylesnet(isDarkMode);
  return (
    <View style={styles.containerbtnnet}>
      <TouchableOpacity style={[style, styles.btnnet]} onPress={handlePress}>
      {IconComponent && <IconComponent width={18} height={18} />}
      </TouchableOpacity>
    </View>
  );
};

export default CustomSocialnetwork;
