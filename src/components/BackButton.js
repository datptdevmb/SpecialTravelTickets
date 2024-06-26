import {TouchableOpacity, Image} from 'react-native';
import stylescontainer from '../styles/screens/Containerloginre_style';
import Icons from '../constants/Icons';
import {useState} from 'react';

// <<<<<<< HEAD

// const BackButton = ({buttonStyle = {}}) => {

//     return (
//         <TouchableOpacity style={{...styles.button,...buttonStyle}}>
//             <Svg width="19" height="19" viewBox="0 0 19 19" fill="none"></Svg>
//         </TouchableOpacity>
//     );
//   }
// =======
function BackButton({onPress}) {
  const [pressnd, setpressnd] = useState(false);
  const handlePress = () => {
    setpressnd(true);
    onPress();
  };
  return (
    <TouchableOpacity
      style={stylescontainer.containerLeftArrow}
      onPress={handlePress}>
      <Image source={Icons.leftarrow} style={stylescontainer.iconLeftArrow} />
    </TouchableOpacity>
  );
  // >>>>>>> f4652ae458de1e40e41d3c287d5e72c50dd07686
}

export default BackButton;