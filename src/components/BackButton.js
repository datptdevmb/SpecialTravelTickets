import {TouchableOpacity, Image} from 'react-native';
import stylescontainer from '../styles/screens/Containerloginre_style';
import Icons from '../constants/Icons';
import { useState } from 'react';

function BackButton({ onPress }) {
  const [pressnd, setpressnd] = useState(false);
  const handlePress = () => {
    setpressnd(true);
    onPress();
  };
  return (
    <TouchableOpacity style={stylescontainer.containerLeftArrow} onPress={handlePress}>
      <Image source={Icons.leftarrow} style={stylescontainer.iconLeftArrow} />
    </TouchableOpacity>
  );
}

export default BackButton;
