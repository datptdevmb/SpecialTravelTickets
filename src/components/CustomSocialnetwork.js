import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import stylesnet from '../styles/components/CustomNetwork_style';

const CustomSocialnetwork = ({image,onPress,style}) => {
  const [pressnd, setpressnd] = useState(false);
  const handlePress = () => {
    setpressnd(true);
    onPress();
  };
  return (
    <View style={stylesnet.containerbtnnet}>
      <TouchableOpacity style={[style,stylesnet.btnnet]}onPress={handlePress}>
        <Image style={stylesnet.imagenet} source={image} />
      </TouchableOpacity>
    </View>
  )
}

export default CustomSocialnetwork