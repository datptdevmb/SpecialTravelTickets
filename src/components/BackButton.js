import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icons from '../constants/Icons';
import stylescontainer from '../styles/screens/Containerloginre_style';
import Colors from '../constants/Color';

function BackButton({ onPress, isDarkMode }) {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    onPress();
  };
  const styles = stylescontainer(isDarkMode)
  return (
    <TouchableOpacity style={styles.containerLeftArrow} onPress={handlePress}>
      <Icons.leftarrow
        width={19}
        height={19}
        fill={isDarkMode ? Colors.dark.icon : Colors.light.icon}
      />
    </TouchableOpacity>
  );
}

export default BackButton;
